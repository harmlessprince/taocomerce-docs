---
title: Add Item to Cart (V2)
---

# Add Item to Cart (V2)

Use this endpoint to add a product, a SKU, a pre-order, or a booking to the cart.

## Endpoint
**POST** `/v2/carts/add`

## Headers
```json
{
  "Authorization": "Bearer JWT_TOKEN",
  "X-Session-Id": "GUEST_SESSION_ID",
  "X-MerchantApiKey": "MERCHANT_API_KEY",
  "Content-Type": "application/json"
}
```
Send `Authorization` for an authenticated customer. Send `X-Session-Id` for a guest customer.

## Request body
| Parameter | Type | Required | Description |
|---|---|---|---|
| `productId` | string | Yes | ID of the product. |
| `quantity` | integer | Yes | Number of items. The minimum value is 1. |
| `variantGroupId` | string (UUID) | For a product with options | ID of the variant group. |
| `skuId` | string (UUID) | For a product with options | ID of the SKU. |
| `selectedUnitKey` | string | No | Key of the selling unit. |
| `selectedUnitQuantity` | number | No | Quantity in the selling unit. It must be more than 0. |
| `scheduledDate` | date (`YYYY-MM-DD`) | For a pre-order product | Date for the pre-order. |
| `bookingDate` | date (`YYYY-MM-DD`) | For a bookable product | Day of the booking. |
| `bookingStartTime` | time (`HH:mm`) | For a bookable product | Start time of the booking. |
| `bookingResourceId` | string | No | ID of the resource to book. |

> [!NOTE]
> Send the guest session ID in the `X-Session-Id` header. Do not send it in the body.

## Example request
```javascript
fetch('https://api.shopsynch.com/v2/carts/add', {
  method: 'POST',
  headers: {
    'X-Session-Id': 'GUEST_SESSION_ID',
    'X-MerchantApiKey': 'MERCHANT_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    productId: '679f8f5a3b5f2173201c2582',
    variantGroupId: '5b1f6c1e-8c5c-4a7e-9d0e-3d8f2a1b9c11',
    skuId: 'a3c2d9f0-1b7e-4f59-8e0a-6c4d2b7e9f10',
    quantity: 1
  })
})
  .then(response => response.json())
  .then(data => console.log(data));
```

## Response 200
The `data` field is a [cart item (V2)](./index.md#cart-item-v2).
```json
{
  "data": {
    "id": "67a6261a320f3f7368dfec35",
    "productId": "679f8f5a3b5f2173201c2582",
    "variantGroupId": "5b1f6c1e-8c5c-4a7e-9d0e-3d8f2a1b9c11",
    "skuId": "a3c2d9f0-1b7e-4f59-8e0a-6c4d2b7e9f10",
    "customerId": null,
    "sessionId": "ee5bfa88-56a2-4551-ae1d-d753984ae1d9",
    "name": "Professional DSLR Camera",
    "price": 899.0,
    "newPrice": 899.0,
    "discount": 0.0,
    "productType": "VARIABLE",
    "attributes": { "Color": "Graphite Black", "Storage": "64GB" },
    "quantityInStock": 45,
    "quantity": 1
  },
  "message": "Success",
  "status": true
}
```

## Error responses
| Status | Message |
|---|---|
| `400` | Please select a product. |
| `400` | Please select all required options before adding this item to your cart. |
| `400` | The selected option group is invalid. |
| `400` | The selected option is invalid. |
| `400` | The selected option is currently out of stock. |
| `400` | The requested quantity is more than what we have in stock. Only N items are available. |
| `400` | Choose the date you want 'PRODUCT' for. (Pre-order product without `scheduledDate`.) |
| `400` | Choose the day and time you want to book 'PRODUCT' for. (Bookable product without `bookingDate` or `bookingStartTime`.) |
| `400` | A booking is for one time. Add another booking for each extra time. |

## Next steps
- [Replace booking time](./replace-booking.md)
- [Checkout](./checkout.md)
