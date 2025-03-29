---
title: Fetch Promo Ads
---

# Fetch Promo Ads

## 📌 Description
This API retrieves a list of promotional ads filtered by status and paginated using a cursor. The response includes promotional ads in either `DRAFT` or `PUBLISHED` status.

## 🔗 Endpoint
- **URL:** `/v1/promo-ads?status=DRAFT&cursor=2025-02-11T18:21:53Z&limit=1`
- **Method:** `GET`

## Query Parameters:
| Parameter | Type   | Required | Description                               |
|-----------|--------|----------|-------------------------------------------|
| `status`  | String | Yes      | The status of the promo ads (`DRAFT` or `PUBLISHED`). |
| `cursor`  | String | No       | The cursor for pagination.    (2025-02-11T18:21:53Z&)            |
| `limit`   | Integer| Yes      | The number of promo ads to retrieve (min: 1, max: 20). |

## 🛠️ Required Headers
```json
{
  "Authorization": "Bearer JWT_TOKEN",
  "X-MerchantId": "YOUR_MERCHANT_ID",
  "Content-Type": "application/json"
}
```

## 📡 Example API Call (Using Fetch)
```javascript
fetch("https://shopsyncapi/v1/promo-ads?status=DRAFT&cursor=2025-02-11T18:21:53Z&limit=1", {
  method: "GET",
  headers: {
    "Authorization": "Bearer JWT_TOKEN",
    "X-MerchantId": "YOUR_MERCHANT_ID",
    "Content-Type": "application/json"
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));
```

## ✅ Sample 200 Response (Success)
```json
{
    "data": {
        "data": [
            {
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
                "createdAt": "2025-02-11T23:32:49.254",
                "updatedAt": "2025-02-11T23:32:49.254"
            }
        ],
        "nextCursor": "2025-02-11T18:21:53.148Z"
    },
    "message": "Promo Ads retrieved successfully",
    "status": true
}
```


## 🔗 Next Steps
- Learn more about [Adding a Promo Ad](./add-promo-ad.md)
- Learn more about [Updating a Promo Ad](./update-promo-ad.md)
- Learn more about [Deleting a Promo Ad](./delete-promo-ad.md)

