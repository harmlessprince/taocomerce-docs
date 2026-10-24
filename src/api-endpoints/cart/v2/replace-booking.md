---
title: Replace Booking Time
---

# Replace Booking Time

Use this endpoint to change the day and time of a booking that is in the cart. The API makes the same checks as for [Add Item to Cart (V2)](./add-item-to-cart.md). Use it when a customer must choose a new time because the first time is not available.

## Endpoint
**PATCH** `/v2/carts/booking/{cartItemId}`

## Path parameters
| Parameter | Type | Description |
|---|---|---|
| `cartItemId` | string | ID of the booking item in the cart. |

## Headers
Send `Authorization` (authenticated customer) or `X-Session-Id` (guest), and `X-MerchantApiKey`.

## Request body
| Parameter | Type | Required | Description |
|---|---|---|---|
| `bookingDate` | date (`YYYY-MM-DD`) | Yes | New day of the booking. |
| `bookingStartTime` | time (`HH:mm`) | Yes | New start time. |
| `bookingResourceId` | string | No | ID of the resource to book. |

## Example request
```javascript
fetch('https://api.shopsynch.com/v2/carts/booking/67a6261a320f3f7368dfec35', {
  method: 'PATCH',
  headers: {
    'X-Session-Id': 'GUEST_SESSION_ID',
    'X-MerchantApiKey': 'MERCHANT_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ bookingDate: '2026-11-03', bookingStartTime: '14:30' })
})
  .then(response => response.json())
  .then(data => console.log(data));
```

## Response 200
The `data` field is the updated [cart item (V2)](./index.md#cart-item-v2).

## Error responses
| Status | Message |
|---|---|
| `400` | Choose the new day. / Choose the new time. |
| `400` | We could not find that booking in your cart. |
| `400` | Only a booking can have its time changed. |
| `400` | That time is too close to another booking in your cart. |
