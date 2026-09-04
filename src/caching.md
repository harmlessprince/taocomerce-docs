---
title: Caching & Performance Tips
description: Learn how to make your app faster and save bandwidth using ShopSynch ETags and HTTP caching.
---

# Caching & Performance Tips

ShopSynch includes built-in HTTP performance features designed to make your storefront, mobile app, and API integrations **blazing fast** while saving network data.

By taking advantage of these features, your app can:
- **Load instantly** for returning shoppers.
- **Save over 90% of data bandwidth** on repeated API calls.
- **Stay 100% accurate** — never show outdated prices or old stock numbers.

---

## 1. How It Works: Two Ways to Speed Up Your App

ShopSynch provides two complementary tools:

1. **ETags (Smart Content Tags)** — Available on **all** read endpoints. Your app asks: *"Has this data changed since my last visit?"* If not, the server sends back a tiny `304 Not Modified` message with **0 body bytes**, saving time and bandwidth.
2. **Time-Based Caching (`X-Enable-Cache`)** — An opt-in feature for heavy read endpoints. Your app tells ShopSynch: *"I want to cache this response on my side for a few minutes to avoid hitting the server repeatedly."*

---

## 2. How to Implement It

### Option A: Using ETags (Automatic Validation)

Whenever you send a `GET` request to ShopSynch, the server includes an `ETag` header in its response. Think of an ETag as a unique fingerprint of the data at that exact moment.

#### Step 1: Save the ETag from the first response
```http
HTTP/1.1 200 OK
Content-Type: application/json
ETag: "0a8f9b2c3d4e5f"

{
  "status": true,
  "data": { ... }
}
```

#### Step 2: Send `If-None-Match` on your next request
When you request the same resource again, send that fingerprint back in the `If-None-Match` header:

```bash
curl -X GET "https://api.shopsynch.com/v1/merchants/profile" \
     -H "Authorization: Bearer YOUR_JWT_TOKEN" \
     -H "X-MerchantApiKey: YOUR_API_KEY" \
     -H "If-None-Match: \"0a8f9b2c3d4e5f\""
```

#### Step 3: Handle the `304 Not Modified` response
- **If data has NOT changed:** The server returns `304 Not Modified` with an empty body. Your app can safely use its locally saved copy.
- **If data HAS changed:** The server returns `200 OK` with the new data and a brand-new `ETag`.

#### JavaScript Example (`fetch`)
```javascript
let savedEtag = localStorage.getItem('profile_etag');
let cachedData = JSON.parse(localStorage.getItem('profile_data') || 'null');

const headers = {
  'Authorization': `Bearer ${token}`,
  'X-MerchantApiKey': apiKey,
};

// Send ETag if we have one
if (savedEtag) {
  headers['If-None-Match'] = savedEtag;
}

const response = await fetch('https://api.shopsynch.com/v1/merchants/profile', {
  headers,
});

if (response.status === 304) {
  // Nothing changed! Use our saved data
  console.log('Using local copy (0 bytes transferred):', cachedData);
} else if (response.status === 200) {
  // Data changed or first visit: save new data and new ETag
  const freshData = await response.json();
  const newEtag = response.headers.get('ETag');

  localStorage.setItem('profile_data', JSON.stringify(freshData));
  if (newEtag) localStorage.setItem('profile_etag', newEtag);

  console.log('Received updated data:', freshData);
}
```

---

### Option B: Opting into Time-Based Caching (`X-Enable-Cache`)

By default, public API requests always receive fresh data (`Cache-Control: no-cache, private`) so external integrations never get confused by old data.

If your application makes frequent read calls (e.g., polling dashboard stats or displaying published ads) and you want your HTTP client or browser to hold onto the response for a few minutes:

Add this header to your request:
```http
X-Enable-Cache: true
```

#### Example Request
```bash
curl -X GET "https://api.shopsynch.com/v1/promo-ads/published" \
     -H "X-MerchantApiKey: YOUR_API_KEY" \
     -H "X-Enable-Cache: true"
```

#### Server Response
```http
HTTP/1.1 200 OK
Cache-Control: max-age=1800, private
Vary: Authorization, X-Mode, X-MerchantId, X-ShopSynch-Client, X-Enable-Cache
ETag: "0493f0b29a"
```
The browser or HTTP client now knows it can keep this response for up to 30 minutes (1800 seconds) without needing another network round-trip.

---

## 3. Best Use Cases

| Use Case | Recommended Tool | Why |
|---|---|---|
| **Mobile Apps & Slow Networks** | **ETags (`If-None-Match`)** | Saves mobile data for shoppers. If nothing changed, 0 payload bytes are downloaded. |
| **High-Traffic Promo Banners** | **`X-Enable-Cache: true`** | Prevents thousands of repeated calls for promo ads that change infrequently. |
| **Dashboard Stat Polling** | **Both (`X-Enable-Cache` + ETags)** | Great for widgets checking inventory or sales summaries every minute. |
| **Product Catalogs & Categories** | **ETags (`If-None-Match`)** | Customers get instant page loads, and changes show up immediately when products are edited. |

---

## 4. Cache Invalidation & Freshness

A common fear with caching is: *"What if I update my product, but my customers still see the old version?"*

Here is how ShopSynch ensures your data is always accurate:

1. **Instant Invalidation on Changes**:
   - ETags are calculated directly from the response content.
   - The moment you update a price, change stock, or edit a profile, the server produces a different ETag hash.
   - Any client sending `If-None-Match` will immediately fail the match and receive the latest `200 OK` response with updated data.
2. **Forcing a Fresh Copy (Bypass Cache)**:
   - If your app ever needs to guarantee an un-cached copy from the server, simply send:
     ```http
     Cache-Control: no-cache
     ```
     or omit the `If-None-Match` header.
3. **Automatic Cleanup on Logout**:
   - When a user logs out via `POST /v1/auth/logout`, the server responds with:
     ```http
     Clear-Site-Data: "cache"
     ```
     This instructs the browser to wipe all locally stored API cache for security.

---

## 5. Supported Routes & Durations

### Dedicated Cached Routes
When you pass `X-Enable-Cache: true` (or when requests come from the ShopSynch dashboard), these endpoints provide pre-configured cache windows:

| Endpoint | Cache Window (`max-age`) | Revalidation Strategy | Purpose |
|---|:---:|:---:|---|
| `GET /v1/promo-ads/published` | **30 minutes** | Cache | Published banners & store announcements |
| `GET /v1/dashboard/overview/summary` | **5 minutes** | Stale-while-revalidate (10 min) | Sales & order overview metrics |
| `GET /v1/dashboard/inventory` | **3 minutes** | Stale-while-revalidate (6 min) | Inventory breakdown & stock stats |
| `GET /v1/dashboard/overview/low-stock` | **3 minutes** | Stale-while-revalidate (6 min) | Urgent low-stock notifications |
| `GET /v1/merchants/profile` | **5 minutes** | Must-revalidate | Authenticated merchant user details |
| `GET /v1/merchants/profile/business` | **5 minutes** | Must-revalidate | Store business information & current mode |

### Universal ETag Support
**All other GET and HEAD endpoints** across `/v1/*` and `/v2/*` (including `/v1/products`, `/v1/categories`, `/v1/orders`, etc.) automatically support **ETags**. You can use `If-None-Match` on any read endpoint to save bandwidth.

---

## Quick Summary Checklist

- [ ] Look for the `ETag` header in API responses.
- [ ] Save the `ETag` and send it back in `If-None-Match` on repeat calls.
- [ ] Handle `304 Not Modified` in your client code to reuse your saved data.
- [ ] Add `X-Enable-Cache: true` when calling stats or promo endpoints to reduce network requests.
- [ ] Send `Cache-Control: no-cache` whenever you need to force a 100% fresh copy.
