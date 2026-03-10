---
title: Initialize Payment
---

# Initialize Payment

##  Description
The **Initialize Payment** API allows users to start the payment process for an order. Before initializing payment, you must have a valid `orderId`, which can be obtained from the **Checkout API**.

##  How to Get an `orderId`
To get a valid `orderId`, the user must first complete the checkout process. Refer to the **[Checkout API](../cart/checkout.md)** for details on how to create an order and retrieve the `orderId`.

##  Endpoint
**POST** `/v1/payments/initialize`

##  Required Headers
```json
{
  "Authorization": "Bearer JWT_TOKEN",
  "X-MerchantApiKey": "MERCHANT_API_KEY",
  "Content-Type": "application/json"
}
```

## 📥 Request Body
| Parameter        | Type   | Required | Description |
|------------------|--------|----------|-------------|
| `orderId`        | string | Yes      | The order id of the order to be paid for. |
| `paymentMethod`  | string | Yes      | The payment method to be used for the payment (e.g., `card`, `bank_transfer`, `offline`). |
| `paymentGateway` | string | Yes      | The selected payment gateway (`PAYSTACK`, `FLUTTERWAVE`, `STRIPE`, `OFFLINE`). |
| `currency`       | string | Yes      | The currency to be used for the payment (e.g., `NGN`, `USD`). |
| `callbackUrl`    | string | Yes      | The callback URL to be used for the payment that are not offline Use this to override the callback url provided on the dashboard for this transaction|

##  Example API Call (Fetch or Axios)
```javascript
fetch('https://api.shopsynch.com/v1/payments/initialize', {
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
