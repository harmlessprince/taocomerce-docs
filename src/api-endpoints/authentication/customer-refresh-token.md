---
title: Refresh Customer Token
---

# Refresh Customer Token

Use this endpoint to obtain a new customer JWT access token and rotated refresh token when an existing session token expires.

## Endpoint
**POST** `/v1/auth/customer/refresh-token`

## Authentication
- Requires `X-MerchantApiKey: MERCHANT_API_KEY`.
- No Authorization Bearer header required.

## Headers
```json
{
  "X-MerchantApiKey": "MERCHANT_API_KEY",
  "Content-Type": "application/json"
}
```

## Request body

| Field Name | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `refreshToken` | string | Yes | The active refresh token issued during login or last rotation. |

```json
{
  "refreshToken": "d8e3b791-4c12-4f9e-a89b-90f7a5b5e4b0"
}
```

## Responses

### 200 OK
```json
{
  "customer": {
    "id": "67dfb8408bd13b35a66f42ed",
    "email": "customer@example.com",
    "fullName": "Jane Doe",
    "status": "active"
  },
  "token": "eyJhbGciOiJIUzI1NiIsIn...",
  "refreshToken": "e9f4c802-5d23-5a0f-b90c-01a8b6c6f5c1",
  "expiresIn": 86400,
  "refreshTokenExpiresIn": 2592000
}
```

### 401 Unauthorized
```json
{
  "status": false,
  "message": "The refresh token has expired or is invalid. Please log in again."
}
```
