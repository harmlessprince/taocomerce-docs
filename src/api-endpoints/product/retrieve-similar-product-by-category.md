---
title: Retrieve Similar Products By Category
---
# Show Similar Products by Category

##  Description
This API retrieves similar products based on the category of a given product. The number of similar products returned is limited between 1 and 10, with a default of 4 if the limit is set to 0 or a negative number.

##  Endpoint
- **URL:** `/v1/products/similar/by/category/{productID}`
- **Method:** `GET`

## Query Parameters

| Parameter | Type   | Description |
|-----------|--------|-------------|
| `limit`   | Integer | The number of similar products to return. Default is 4 if set to 0 or lower. Maximum is 10. |

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
fetch("https://shopsyncapi/v1/products/similar/by/category/679f8f5a3b5f2173201c2582?limit=4", {
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
    "data": [
        {
            "id": "dc87327c-5394-40d1-9691-6953b2a70cd7",
            "name": "Addidas Men Sports Shoes",
            "slug": "addidas_men_sports_shoes-0400640",
            "description": "Men Sports Shoes Luxury Casual Sneakers Mesh Running Shoes",
            "summary": null,
            "image": "http://lorempixel.com/1366/768/people/",
            "thumbnail": "http://lorempixel.com/1366/768/people/",
            "images": [
                "http://lorempixel.com/1366/768/people/",
                "http://lorempixel.com/1366/768/people/"
            ],
            "price": "94668.67",
            "newPrice": "49227.71",
            "quantity": 13,
            "category": "Snail",
            "color": null,
            "specifications": [
                { "key": "Screen Size", "value": "63\"" },
                { "key": "Display Type", "value": "Rollable Display" }
            ],
            "variations": null,
            "features": []
        }
    ]
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

