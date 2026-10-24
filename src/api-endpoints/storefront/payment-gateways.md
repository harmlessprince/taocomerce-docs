---
title: Get Storefront Payment Gateways
---

# Get Storefront Payment Gateways

Use this endpoint to show the online payment gateways that a customer can use at checkout. The response also shows the gateway to select first.

The response does not include gateways that are not set up, not enabled, or set to offline collection.

## Endpoint
**GET** `/v1/storefront/payment-gateways`

## Headers
```json
{
  "X-MerchantApiKey": "MERCHANT_API_KEY"
}
```

## Example request
```javascript
fetch('https://api.shopsynch.com/v1/storefront/payment-gateways', {
  method: 'GET',
  headers: { 'X-MerchantApiKey': 'MERCHANT_API_KEY' }
})
  .then(response => response.json())
  .then(data => console.log(data));
```

## Response 200
```json
{
  "data": {
    "defaultGateway": "PAYSTACK",
    "currency": "NGN",
    "gateways": [
      {
        "gateway": "PAYSTACK",
        "name": "Paystack",
        "paymentMethods": [],
        "currencies": ["NGN"]
      }
    ]
  },
  "message": "Payment gateways retrieved successfully.",
  "status": true
}
```

### Data fields
| Field | Type | Description |
|---|---|---|
| `defaultGateway` | string | Gateway to select first. |
| `currency` | string | Currency of the store. |
| `gateways` | array | Gateways that the customer can use. |
| `gateways[].gateway` | string | Gateway code. |
| `gateways[].name` | string | Gateway name. |
| `gateways[].paymentMethods` | array | Payment methods that the gateway supports. |
| `gateways[].currencies` | array of strings | Currencies that the gateway supports. |

## Next steps
- [Checkout (V2)](../cart/v2/checkout.md)
- [Payment API](../payment/index.md)
