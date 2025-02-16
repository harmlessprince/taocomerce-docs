---
title: Add Promo Ad
---
# Add Promo Ad

## 📌 Description
This API allows store owners to add a promotional advertisement to their store. Only authorized users (store owners) can access this endpoint.

## 🔗 Endpoint
- **URL:** `/v1/promo-ads`
- **Method:** `POST`

## 🛠️ Required Headers
```json
{
  "Authorization": "Bearer YOUR_JWT_TOKEN",
  "X-TenantId": "YOUR_TENANT_ID",
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
| `link`       | String | Yes      | The URL associated with the button. |
| `metadata`   | Object | No       | Additional metadata for the button. |

## 📡 Example API Call (Using Fetch)
```javascript
fetch("https://shopsyncapi/v1/promo-ads/12345", {
  method: "PATCH",
  headers: {
    "Authorization": "Bearer YOUR_JWT_TOKEN",
    "X-TenantId": "YOUR_TENANT_ID",
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

## ✅ Sample 200 Response (Success)
```json
{
    "data": {
        "id": "67abd011ea45dd1b9222e591",
        "adName": "Biggest Sale Ever",
        "images": [
            "https://example.com/sale1.jpg",
            "https://example.com/sale2.jpg"
        ],
        "ctaText": "Shop Now!",
        "promoCode": "BIGSALE50",
        "buttons": [
            {
                "type": "primary",
                "position": "bottom-center",
                "color": "#FF0000",
                "textColor": "#FFFFFF",
                "link": "https://example.com/shop",
                "metadata": null
            }
        ],
        "status": "DRAFT",
        "metadata": null,
        "createdAt": "2025-02-11T23:32:49.254402",
        "updatedAt": "2025-02-11T23:32:49.254402"
    },
    "message": "Promo Ad created successfully",
    "status": true
}
```

## ❌ Sample 400 Response (Not Found Error)
```json
{
    "data": {
        "id": "67ab8731aae58b6fb27a03af",
        "adName": "Biggest Sale Ever - Updated",
        "images": [
            "https://example.com/sale1.jpg",
            "https://example.com/sale2.jpg",
            "https://example.com/sale3.jpg"
        ],
        "ctaText": "Limited Offer!",
        "promoCode": "BIGSALE2024",
        "buttons": [
            {
                "type": "secondary",
                "position": "top-right",
                "color": "#008000",
                "textColor": "#FFFFFF",
                "link": "https://example.com/deals",
                "metadata": null
            }
        ],
        "status": "PUBLISHED",
        "metadata": null
    },
    "message": "Promo Ad updated successfully",
    "status": true
}
```

## 🔗 Next Steps
- Learn more about [Updating a Promo Ad](./update-promo-ad.md)
- Learn more about [Deleting a Promo Ad](./delete-promo-ad.md)

