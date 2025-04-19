---
title: Authenticated Customer Checkout
---

# Authenticated Customer Checkout

##  Description
The **Checkout API** allows authenticated customers to place an order using the items in their cart. If you want your customers to checkout without been authenticated, visit: [Guest Checkout](./checkout-guest.md)

##  Authentication Requirements
- Customers **must** be authenticated and provide a valid JWT token.
- The `X-MerchantApiKey` header is **mandatory** for all requests.

##  Endpoint
**POST** `/v1/carts/checkout`

##  Required Headers
```json
{
  "Authorization": "Bearer JWT_TOKEN",
  "X-MerchantApiKey": "MERCHANT_API_KEY",
  "Content-Type": "application/json"
}
```

## 📥 Request Body
| Parameter         | Type   | Required | Description |
|------------------|--------|----------|-------------|
| `country`        | string | No       | The country where the order is being placed. |
| `state`          | string | Yes      | The state where the order is being placed. |
| `city`           | string | Yes      | The city where the order is being placed. |
| `area`           | string | Yes      | Area details (2 to 100 characters). |
| `landmark`       | string | No       | Landmark details (2 to 100 characters). |
| `meta`           | object | No       | Additional metadata about the order. |
| `shippingAddress` | string | Yes      | Address where the order will be shipped. |
| `shippingMethod`  | string | Yes      | The method of shipping. |
| `billingAddress`  | string | Yes       | Billing address (if different from shipping address). |
| `promoCode`      | string | No       | Promo code to apply any discounts. |
| `firstName` | string | Yes      | The customer first name |
| `lastName`  | string | Yes      | The customer last name |
| `email`  | string | Yes       | The customer email address |
| `phoneNumber`  | string | Yes       | The customer phone number |

##  Example API Call (Fetch or Axios)
```javascript
fetch('https://api.shopsynch.com/v1/carts/checkout', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer JWT_TOKEN',
    'X-MerchantApiKey': 'MERCHANT_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    country: "USA",
    state: "California",
    city: "Los Angeles",
    area: "Downtown",
    landmark: "Near Central Park",
    shippingAddress: "123 Main St, Los Angeles, CA",
    shippingMethod: "Standard",
    billingAddress: "123 Main St, Los Angeles, CA",
    promoCode: "DISCOUNT10",
    lastName: "John",
    firstName: "Doe",
    phoneNumber: "xxxxxxx",
    email: "sameple@yopmail.com"
  })
})
.then(response => response.json())
.then(data => console.log(data));
```

## 📤 Sample 200 Response (Success)
```json
{
    "id": "67a6261a320f3f7368dfec35",
    "orderNumber": "ORD123456",
    "orderDate": "2025-02-10T10:01:30.129971",
    "shippingAddress": "123 Main St, Los Angeles, CA",
    "billingAddress": "123 Main St, Los Angeles, CA",
    "shippingMethod": "Standard",
    "paymentMethod": "Credit Card",
    "totalPrice": 150.00,
    "waybillPrice": 10.00,
    "country": "USA",
    "state": "California",
    "city": "Los Angeles",
    "area": "Downtown",
    "landmark": "Near Central Park",
    "status": "Processing",
    "paymentStatus": "PENDING",
    "paymentGateway": "PAYSTACK",
    "paymentGatewayTransactionId": "txn_123456789",
    "fulfillmentStatus": "Pending",
    "user": {
        "id": "679f8f5a3b5f2173201c2582",
        "fullName": "John Doe"
    },
    "promotion": {
        "id": "promo123",
        "name": "Winter Sale",
        "code": "WINTER2025",
        "description": "10% off all items",
        "startDate": "2025-02-01T00:00:00",
        "endDate": "2025-02-28T23:59:59",
        "discount": 10.0
    },
    "address": {
        "id": "addr456",
        "fullAddress": "123 Main St, Los Angeles, CA",
        "street": "Main St",
        "streetNumber": "123",
        "postalCode": "90001",
        "city": "Los Angeles",
        "userId": "679f8f5a3b5f2173201c2582",
        "isDefault": true,
        "state": "California",
        "localGovernment": "LA County",
        "country": "USA"
    },
    "createdAt": "2025-02-10T10:01:30.129971"
}
```

## ❌ Sample 400 Response (Cart Empty Error)
```json
{
    "status": false,
    "message": "Your cart is empty. Please add items before proceeding."
}
```

##  Next Steps

- [List Cart Items](./list-cart-items.md)
- [Add Item to Cart](./add-item-to-cart.md)
- [Payment API](../payment/initialize-payment.md)
- [Guest Checkout](./checkout-guest.md)
