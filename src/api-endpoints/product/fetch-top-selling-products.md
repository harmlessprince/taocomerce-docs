---
title: Fetch Top Selling Product By Quantity
---

# Fetch Top Selling Products By Quantity Sold

##  Description
Retrieves a list of the most popular products based on total quantity sold. This endpoint is public-facing and omits sensitive business metrics.
##  Endpoint
- **URL:** `/v1/products/top-by-quantity`
- **Method:** `GET`

## Query Parameters
| Parameter | Type | Required | Description | Since | Example |
|-----------|------|----------|-------------|-------|---------|
|startDate|string|false|No comments found.|-||
|endDate|string|false|No comments found.|-||

##  Required Headers
```json
{
  "X-MerchantApiKey": "MERCHANT_API_KEY",
  "Content-Type": "application/json"
}
```

##  Example API Call (Using Fetch)
```bash
curl -X GET -k -H "X-MerchantApiKey:pk_test" -i 'https://api.shopsynch.com/v1/product-stats/top-by-quantity?tenantId=&startDate=&endDate=&limit=10'
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