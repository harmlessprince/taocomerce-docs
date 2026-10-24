---
title: Add Product Review
---

# Add Product Review

Use this endpoint to submit a review for a specific product. Authenticated customers and guest reviewers can submit ratings and comments.

## Endpoint
**POST** `/v1/reviews/add`

## Authentication
- Requires customer authentication: `Authorization: Bearer JWT_TOKEN` (optional if guest review is allowed).
- Requires `X-MerchantApiKey: MERCHANT_API_KEY`.

## Headers
```json
{
  "Authorization": "Bearer JWT_TOKEN",
  "X-MerchantApiKey": "MERCHANT_API_KEY",
  "Content-Type": "application/json"
}
```

## Request body

| Field Name | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `productId` | string | Yes | Unique identifier of the product. |
| `rating` | integer | Yes | Rating value from 1 to 5. |
| `comment` | string | Yes | Review message content. |
| `reviewerName` | string | No | Optional display name for the reviewer. |

```json
{
  "productId": "679f8f5a3b5f2173201c2582",
  "rating": 5,
  "comment": "Excellent quality and fast delivery.",
  "reviewerName": "John Doe"
}
```

## Responses

### 200 OK
```json
{
  "status": true,
  "message": "Your review has been submitted successfully.",
  "data": {
    "id": "67b93a20d43a5c1234567890",
    "productId": "679f8f5a3b5f2173201c2582",
    "rating": 5,
    "comment": "Excellent quality and fast delivery.",
    "status": "active",
    "reviewerName": "John Doe",
    "createdAt": "2026-03-08T10:30:00Z"
  }
}
```

### 400 Bad Request
```json
{
  "status": false,
  "message": "You have already submitted a review for this product. Thank you for your feedback!"
}
```
