---
title: Fetch Published Promo Ads
---

---
title: Fetch Promo Ads
---

# Fetch Promo Ads

##  Description
This API retrieves a list of promotional ads that has been published. The default limit is 3 and maximum is 10.
This is suitable for users that wants to show some adds on there site hero section.

##  Endpoint
- **URL:** `/v1/promo-ads?limit=3`
- **Method:** `GET`

## Query Parameters:
| Parameter | Type   | Required | Description                               |
|-----------|--------|----------|-------------------------------------------|
| `limit`   | Integer| Yes      | The number of promo ads to retrieve (min: 1, max: 10). default to 3 |

##  Required Headers
```json
{
  "Authorization": "Bearer JWT_TOKEN",
  "X-MerchantApiKey": "MERCHANT_API_KEY",
  "Content-Type": "application/json"
}
```

##  Example API Call (Using Fetch)
```javascript
fetch("https://shopsyncapi/v1/promo-ads?status=DRAFT&cursor=2025-02-11T18:21:53Z&limit=1", {
  method: "GET",
  headers: {
    "Authorization": "Bearer JWT_TOKEN",
    "X-MerchantApiKey": "MERCHANT_API_KEY",
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
    "data": [
        {
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
            "metadata": null,
            "createdAt": "2025-02-11T18:21:53.148",
            "updatedAt": "2025-02-12T09:54:48.825"
        }
    ],
    "message": "Published Promo Ads retrieved successfully",
    "status": true
}
```


##  Next Steps
- Learn more about [Adding a Promo Ad](./add-promo-ad.md)
- Learn more about [Updating a Promo Ad](./update-promo-ad.md)
- Learn more about [Deleting a Promo Ad](./delete-promo-ad.md)

