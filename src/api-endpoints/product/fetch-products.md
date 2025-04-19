---
title: Fetch Products
---

# Fetch Products

##  Description
This API retrieves a list of products based on various filter parameters such as name, category, RAM size, storage, brand, and search query.

##  Endpoint
- **URL:** `/v1/products`
- **Method:** `GET`

## Query Parameters

| Parameter            | Type   | Description |
|----------------------|--------|-------------|
| `sortDirectionParam` | String | Sorting direction (`ASC` or `DESC`). Default: `ASC`. |
| `sortFieldParam`     | String | Field to sort results by (e.g., `NAME,CATEGORY,PRICE,CREATED_AT`). Default: `NAME`. |
| `name`              | String | Filter products by name. |
| `minPrice`              | Number | Filter products by minimum price. |
| `maxPrice`              | Number | Filter products by maximum price. |
| `availability`              | String | Filter products for availability (`in_stock`, `out_of_stock`).  |
| `category`          | String | Filter products by category. |
| `ramSize`           | String | Filter products by RAM size (e.g., `16GB`). |
| `storage`           | String | Filter products by storage capacity. |
| `brand`             | String | Filter products by brand. |
| `rating`             | Number | Filter products by rating. |
| `newArrival`             | Number | Filter products added within a specific time frame (e.g., last 30 days). |
| `search`            | String | General search query for products.(search by name, description and category) |

##  Required Headers
```json
{
  "X-MerchantApiKey": "MERCHANT_API_KEY",
  "Content-Type": "application/json"
}
```

##  Example API Call (Using Fetch)
```javascript
fetch("https://shopsyncapi/v1/products?sortDirectionParam=ASC&sortFieldParam=NAME&name=SIGNATURE&category=TV&ramSize=16GB&search=Smart", {
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
    "message": "All products retrieved",
    "data": {
        "total": 2,
        "totalPages": 1,
        "currentPage": 0,
        "products": [
            {
                "id": "dc87327c-5394-40d1-9691-6953b2a70cd7",
                "name": "Addidas Men Sports Shoes",
                "description": "Luxury Casual Sneakers Mesh Running Shoes",
                "image": "http://lorempixel.com/1366/768/people/",
                "price": "94668.67",
                "newPrice": "49227.71",
                "quantity": 13,
                "category": "Snail",
                "discount": 48.0
            }
        ]
    }
}
```

## ❌ Sample 404 Response (Not Found Error)
```json
{
  "status": false,
  "message": "Products not found"
}
```

##  Next Steps
- Learn more about [Adding Product Variation](./update-product-variation-price-detail.md)
- Learn more about [Adding Product Variation Price Detail](./delete-product-variation-price-detail.md)