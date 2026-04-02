---
title: Fetch Top Selling Product By Revenue
---

# Fetch Top Selling Products By Quantity Sold

##  Description
Get Top Selling Products base on revenue<br><br>Retrieves a list of the most popular products based on total revenue.

##  Endpoint
- **URL:** `/v1/products/top-by-revenue`
- **Method:** `GET`

## Query Parameters
| Parameter | Type | Required | Description | Since | Example |
|-----------|------|----------|-------------|-------|---------|
|tenantId|string|false|Optional tenant ID (defaults to current context)|-||
|startDate|string|false|No comments found.|-||
|endDate|string|false|No comments found.|-||
|limit|int32|true|Maximum number of products to return (default 10)|-|10|

##  Required Headers
```json
{
  "X-MerchantApiKey": "MERCHANT_API_KEY",
  "Content-Type": "application/json"
}
```

##  Example API Call (Using Fetch)
```bash
curl -X GET -k -H "X-MerchantApiKey:pk_test" -i 'https://api.shopsynch.com/v1/product-stats/top-by-revenue?tenantId=&startDate=&endDate=&limit=10'
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