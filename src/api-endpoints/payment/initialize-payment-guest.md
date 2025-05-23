---
title: Initialize Guest Payment
---

# Initialize Guest Payment

##  Description
The **Initialize Guest Payment** API allows none authenticated customers to start the payment process for an order. Before initializing payment, you must have a valid `orderId`, which can be obtained from the **Checkout Guest API**.

##  How to Get an `orderId`
To get a valid `orderId`, the user must first complete the checkout process. Refer to the **[Checkout Guest API](../cart/checkout-guest.md)** for details on how to create an order and retrieve the `orderId`.

##  Authentication Requirements
-  The `X-SessionId` header is **mandatory** .
- The `X-MerchantApiKey` header is **mandatory** for all requests.

##  Endpoint
**POST** `/v1/payments/guest/initialize`

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
| Parameter        | Type   | Required | Description |
|------------------|--------|----------|-------------|
| `orderId`        | string | Yes      | The unique identifier of the order. |
| `paymentMethod`  | string | Yes      | The method of payment (e.g., `card`, `bank_transfer`, `offline`). |
| `paymentGateway` | string | Yes      | The selected payment gateway (`PAYSTACK`, `FLUTTERWAVE`, `STRIPE`). |
| `currency`       | string | Yes      | The currency for the payment (e.g., `NGN`, `USD`). |
| `callbackUrl`    | string | Yes      | Fully qualified url, e.g. https://example.com/ . Use this to override the callback url provided on the dashboard for this transaction|

##  Example API Call (Fetch or Axios)
```javascript
fetch('https://api.shopsynch.com/v1/payments/guest/initialize', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer JWT_TOKEN',
    'X-MerchantApiKey': 'MERCHANT_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    orderId: "67a64666715cd74ca8f6baf1",
    paymentMethod: "card",
    paymentGateway: "PAYSTACK",
    currency: "NGN",
    callbackUrl: "https://example.com/"
  })
})
.then(response => response.json())
.then(data => console.log(data));
```

## 📤 Sample 200 Response (Success)
```json
{
    "data": {
        "reference": "PAYSTACK_802444qrqNSg",
        "accessCode": "03ikjsifw93b72f",
        "link": "https://checkout.paystack.com/03ikjsifw93b72f"
    },
    "message": "Payment initiated successfully",
    "status": true
}
```

## ❌ Sample 400 Response (Invalid Payment Method)
```json
{
    "status": false,
    "message": "The selected payment method is not supported for PAYSTACK, supported methods are: [card, bank, bank_transfer]"
}
```

## ❌ Sample 400 Response (Invalid Payment Gateway)
```json
{
    "status": false,
    "message": "Payment gateway is not supported, supported gateways are: [PAYSTACK, FLUTTERWAVE, STRIPE]"
}
```

##  Next Steps
- [Checkout API](../cart/checkout.md)
- [Payment Confirmation](./verify-payment.md)
