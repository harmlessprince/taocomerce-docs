---
title: Guest Checkout
---

# Guest Checkout

##  Description
The **Guest Checkout API** allows none authenticated customers to place an order using the items in their cart and session id used in adding items to a cart ([Generate Session Id](./generate-cart-session-id.md)). 

##  Authentication Requirements
-  The `X-SessionId` header is **mandatory** .
- The `X-MerchantApiKey` header is **mandatory** for all requests.

##  Endpoint
**POST** `/v1/carts/guest/checkout`

##  Required Headers
```json
{
  "Authorization": "Bearer JWT_TOKEN",
  "X-MerchantApiKey": "MERCHANT_API_KEY",
  "X-SessionId": "XXXXXXXXXX",
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
fetch('https://api.shopsynch.com/v1/carts/guest/checkout', {
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
    "data": {
        "id": "67e3b3ee8a86a453d84eb58d",
        "orderNumber": "ORD-A780935E",
        "orderDate": "2025-03-26T08:59:42.925",
        "billingAddress": null,
        "shippingMethod": "Bus",
        "paymentMethod": null,
        "totalPrice": "51196.82",
        "waybillPrice": null,
        "country": "Nigeria",
        "state": "Lagos",
        "city": "ikeja",
        "area": null,
        "landmark": null,
        "status": "PENDING",
        "paymentStatus": "PENDING",
        "paymentGateway": null,
        "paymentGatewayTransactionId": null,
        "fulfillmentStatus": "UNFULFILLED",
        "user": null,
        "contactInformation": {
            "firstName": "Taofeeq",
            "lastName": "Adewuyi",
            "email": "realolamilekan@gmail.com",
            "phoneNumber": "07086556010",
            "address": "Ajegunle"
        },
        "promotion": null,
        "address": null,
        "tenantId": "679f2dd75f703c799f673415",
        "createdAt": "2025-03-26T08:59:42.94"
    },
    "message": "Order initiated successfully",
    "status": true
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
