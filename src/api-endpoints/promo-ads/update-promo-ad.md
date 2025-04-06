---
title: Update Promo Ad
---

# Update Promo Ad

##  Description
This API allows store owners to update an existing promotional advertisement by its unique ID.

##  Endpoint
- **URL:** `/v1/promo-ads/{promoAdId}`
- **Method:** `PATCH`

##  Required Headers
```json
{
  "Authorization": "Bearer JWT_TOKEN",
  "X-MerchantId": "YOUR_MERCHANT_ID",
  "Content-Type": "application/json"
}
```

## 📥 Request Body
### PromoAdRequest
| Field Name  | Type   | Required | Description |
|-------------|--------|----------|-------------|
| `adName`    | String | Yes      | The name of the promotional ad (max: 100 characters). |
| `images`    | List | Yes | A list of image URLs for the ad. At least one image is required. |
| `ctaText`   | String | Yes      | The call-to-action (CTA) text for the ad. |
| `promoCode` | String | Yes      | The promotional code associated with the ad (max: 20 characters). |
| `buttons`   | List | Yes | A list of buttons associated with the ad. At least one button is required. |
| `status`    | String | Yes      | The status of the ad (`DRAFT` or `PUBLISHED`). |

### ButtonRequest
| Field Name   | Type   | Required | Description |
|--------------|--------|----------|-------------|
| `type`       | String | Yes      | The button type (e.g., `primary`, `secondary`). |
| `position`   | String | Yes      | The position of the button (e.g., `top-right`, `bottom-left`). |
| `color`      | String | Yes      | The background color of the button (hex or name). |
| `textColor`  | String | Yes      | The text color of the button (hex or name). |
| `text`       | String | Yes      | The text inside the button. |
| `link`       | String | Yes      | The URL associated with the button. |
| `metadata`   | Object | No       | Additional metadata for the button. |

##  Example API Call (Using Fetch)
```javascript
fetch("https://shopsyncapi/v1/promo-ads/12345", {
  method: "PATCH",
  headers: {
    "Authorization": "Bearer JWT_TOKEN",
    "X-MerchantId": "YOUR_MERCHANT_ID",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    "adName": "Spring Sale",
    "images": ["https://example.com/image1.jpg", "https://example.com/image2.jpg"],
    "ctaText": "Shop Now!",
    "promoCode": "SPRING20",
    "buttons": [
      {
        "type": "primary",
        "position": "top-right",
        "color": "#FF5733",
        "textColor": "#FFFFFF",
        "link": "https://example.com/shop",
        "metadata": {}
      }
    ],
    "status": "PUBLISHED"
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));
```

## ✅ Sample 200 Response (Success)
```json
{
  "status": true,
  "message": "Promo ad updated successfully",
  "data": {
    "id": "12345",
    "adName": "Spring Sale",
    "status": "PUBLISHED"
  }
}
```

## ❌ Sample 404 Response (Not Found Error)
```json
{
  "status": false,
  "message": "Promo ad not found"
}
```

##  Next Steps
- Learn more about [Adding a Promo Ad](./add-promo-ad.md)
- Learn more about [Deleting a Promo Ad](./delete-promo-ad.md)

