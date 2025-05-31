---
title: Show Product
---

# Show Product

##  Description
This API allows users to retrieve details of a specific product by its ID.

##  Endpoint
- **URL:** `/v1/products/{productId}`
- **Method:** `GET`

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
fetch("https://api.shopsynch.com/v1/products/679f8f5a3b5f2173201c2582", {
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
    "status": true,
    "message": "Product retrieved",
    "data": {
        "id": "679f8f5a3b5f2173201c2582",
        "name": "LG 45 Inch Signature OLed R Class Rollable 4K Smart Tv",
        "slug": "lg_45_inch_signature_oled_r_class_rollable_4k_smart_tv-0261075",
        "description": "Revolutionary rollable design, Full View / Line View / Zero View, OLED technology with self-illuminating pixels, Smart TV webOS 6.0 with pointer remote control",
        "summary": "Revolutionary rollable design, Full View / Line View / Zero View, OLED technology with self-illuminating pixels",
        "image": "https://m.media-amazon.com/images/I/51ObdXZHQTL._AC_UY1100_.jpg",
        "thumbnail": "https://m.media-amazon.com/images/I/51ObdXZHQTL._AC_UY1100_.jpg",
        "images": [
            "https://m.media-amazon.com/images/I/51ObdXZHQTL._AC_UY1100_.jpg",
            "https://m.media-amazon.com/images/I/51ObdXZHQTL._AC_UY1100_.jpg"
        ],
        "price": "20000.00",
        "newPrice": "16200.00",
        "ramSize": null,
        "Storage": null,
        "size": "Large",
        "quantity": 13,
        "brand": null,
        "discount": 10.0,
        "category": "Rafia",
        "color": "RedBlack",
        "specifications": [
            {
                "key": "Display Type",
                "value": "Rollable Display"
            },
            {
                "key": "Resolution",
                "value": "3840 x 2160"
            },
            {
                "key": "Screen Size",
                "value": "63\""
            }
        ],
        "variations": null,
        "features": [
            "feature 1",
            "feature 2"
        ]
    }
}
```

## ❌ Sample 404 Response (Not Found Error)
```json
{
  "status": false,
  "message": "Product not found"
}
```

##  Next Steps
- Learn more about [Adding Product Variation](./update-product-variation-price-detail.md)
- Learn more about [Adding Product Variation Price Detail](./delete-product-variation-price-detail.md)

