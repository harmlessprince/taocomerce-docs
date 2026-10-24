---
title: Checkout (V2)
---

# Checkout (V2)

Use these endpoints to create an order from a V2 cart.

| Customer | Method and path | Authentication |
|---|---|---|
| Authenticated | **POST** `/v2/carts/checkout` | `Authorization: Bearer JWT_TOKEN` |
| Guest | **POST** `/v2/carts/guest/checkout` | `X-Session-Id` header (required) |

Every request must have the `X-MerchantApiKey` header. For an authenticated customer, if you send the `X-Session-Id` header, the API first merges the guest cart into the cart of the customer.

## Request body
| Parameter | Type | Required | Description |
|---|---|---|---|
| `firstName` | string | Yes | First name of the customer. 2 to 100 characters. |
| `lastName` | string | Yes | Last name of the customer. 2 to 100 characters. |
| `email` | string | Yes | Email address of the customer. |
| `phoneNumber` | string | Yes | Phone number of the customer. |
| `paymentMethod` | string | Yes | Payment method that the customer selects. |
| `shippingAddress` | string | Only for shippable items | Delivery address. |
| `shippingMethod` | string | Only for shippable items | Shipping method. |
| `state` | string | Only for shippable items | State of the delivery address. |
| `city` | string | Only for shippable items | City of the delivery address. |
| `country` | string | No | Country of the delivery address. |
| `area` | string | No | Area. 2 to 100 characters. |
| `landmark` | string | No | Landmark. 2 to 100 characters. |
| `billingAddress` | string | No | Billing address, if different from the delivery address. |
| `deliveryQuoteId` | string | No | ID of a delivery quote that you got before checkout. |
| `payOffline` | boolean | No | Set to `true` if the customer pays offline. |
| `promoCode` | string | No | Promotion code to apply. |
| `currency` | string | No | Payment currency. The default is the default currency of the store. |
| `meta` | object | No | Extra data to store with the order. |
| `sessionId` | string | No | Guest session ID. For a guest checkout, the `X-Session-Id` header has priority. |
| `subtotal`, `discountAmount`, `shippingFee`, `taxAmount`, `totalAmount` | number | No | Amounts from your storefront. The API calculates the final amounts. |

> [!NOTE]
> A cart that has only digital items does not need `shippingAddress`, `shippingMethod`, `state` and `city`.

## Example request
```javascript
fetch('https://api.shopsynch.com/v2/carts/checkout', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer JWT_TOKEN',
    'X-MerchantApiKey': 'MERCHANT_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phoneNumber: '+2348000000000',
    paymentMethod: 'CARD',
    state: 'California',
    city: 'Los Angeles',
    shippingAddress: '123 Main St, Los Angeles, CA',
    shippingMethod: 'Standard'
  })
})
  .then(response => response.json())
  .then(data => console.log(data));
```

## Response 200
The `data` field is an order. It has these fields, and others:

| Field | Type | Description |
|---|---|---|
| `id`, `orderNumber`, `status`, `paymentStatus`, `totalPrice` | various | Main order data. |
| `siblingOrderIds` | array of strings | IDs of the other orders that the same checkout created. Pay and track these orders together. |
| `bookingDate`, `bookingStartTime`, `bookingCode`, `bookingStatus` | various | Booking details, if the order has a booking. |

```json
{
  "data": {
    "id": "67a6261a320f3f7368dfec35",
    "orderNumber": "ORD123456",
    "status": "PENDING",
    "paymentStatus": "PENDING",
    "totalPrice": 160.0,
    "siblingOrderIds": []
  },
  "message": "Order initiated successfully",
  "status": true
}
```
The sample shows some of the fields. See the [Order API](../../order/index.md) for all order fields.

## Error responses
| Status | Message |
|---|---|
| `400` | Your cart is empty. Please add items to your cart before proceeding. |
| `400` | Please start a guest session first. (Guest checkout without a session ID.) |
| `400` | The requested quantity is more than what we have in stock. Only N items are available. |
