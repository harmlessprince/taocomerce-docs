---
title: Payment API
---

# Payment API

Use the Payment API to initialize payments, verify transactions, check available payment gateways, and track order payments.

## Endpoints
| Endpoint | Method | Path | Description |
|---|---|---|---|
| [Initialize Payment](./initialize-payment.md) | POST | `/v1/payments/initialize` | Initialize payment for authenticated customer order |
| [Initialize Guest Payment](./initialize-payment-guest.md) | POST | `/v1/payments/guest/initialize` | Initialize payment for guest customer order |
| [Verify Payment](./verify-payment.md) | POST | `/v1/payments/confirm` | Confirm and verify transaction with payment gateway |
| [Update Payment Status](./update-payment-status.md) | PATCH | `/v1/payments/{paymentId}/status` | Update status of a payment record |
| [Storefront Payment Gateways](../storefront/payment-gateways.md) | GET | `/v1/storefront/payment-gateways` | Public list of payment gateways offered by the store |
