---
title: Get Promo Ad Details
---

# Get Promo Ad Details

Use these endpoints to retrieve promotional banner details either by unique ID or by public URL slug.

---

## 1. Get Promo Ad by ID

### Endpoint
**GET** `/v1/promo-ads/{id}`

### Authentication
- Requires merchant authentication: `Authorization: Bearer JWT_TOKEN`.
- Requires `X-MerchantApiKey: MERCHANT_API_KEY`.

### Responses (200 OK)
```json
{
  "status": true,
  "message": "Promo Ad retrieved successfully",
  "data": {
    "id": "67abd011ea45dd1b9222e591",
    "adName": "Biggest Sale Ever",
    "slug": "biggest-sale-ever",
    "images": [
      "https://example.com/sale1.jpg"
    ],
    "ctaText": "Shop Now!",
    "promoCode": "BIGSALE50",
    "status": "PUBLISHED",
    "createdAt": "2026-02-11T23:32:49.254Z"
  }
}
```

---

## 2. Get Promo Ad by Slug

Retrieves promotional ad details using the human-readable slug. This endpoint is public for storefront banners.

### Endpoint
**GET** `/v1/promo-ads/by-slug/{slug}`

### Authentication
- Requires `X-MerchantApiKey: MERCHANT_API_KEY`.
- No user bearer token required.

### Responses (200 OK)
```json
{
  "status": true,
  "message": "Promo Ad retrieved successfully",
  "data": {
    "id": "67abd011ea45dd1b9222e591",
    "adName": "Biggest Sale Ever",
    "slug": "biggest-sale-ever",
    "images": [
      "https://example.com/sale1.jpg"
    ],
    "ctaText": "Shop Now!",
    "promoCode": "BIGSALE50",
    "status": "PUBLISHED"
  }
}
```
