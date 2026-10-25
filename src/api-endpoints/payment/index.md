---
title: Payment API
---

# Payment API

Use the Payment API to initialize payments, verify transactions, check available payment gateways, retrieve payment records, and generate split payment links.

## Endpoints

| Endpoint | Method | Path | Description |
|---|---|---|---|
| [Initialize Payment](./initialize-payment.md) | POST | `/v1/payments/initialize` | Initialize payment for authenticated customer order |
| [Initialize Guest Payment](./initialize-payment-guest.md) | POST | `/v1/payments/guest/initialize` | Initialize payment for guest customer order |
| [Verify Payment](./verify-payment.md) | POST | `/v1/payments/confirm` | Confirm and verify transaction with payment gateway |
| [Get All Payments](./fetch-payments.md) | GET | `/v1/payments` | Paginated list of payment transactions |
| [Get Payment by ID](./get-payment-detail.md) | GET | `/v1/payments/{paymentId}` | Transaction detail for a specific payment |
| [Generate Payment Link](./generate-payment-link.md) | POST | `/v1/payment-links` | Generate hosted split payment link |
| [Get Latest Order Payment Link](./get-order-payment-link.md) | GET | `/v1/payment-links/orders/{orderId}/latest` | Retrieve latest payment link for an order |
| [Update Payment Status](./update-payment-status.md) | PATCH | `/v1/payments/{paymentId}/status` | Update status of a payment record |
| [Storefront Payment Gateways](../storefront/payment-gateways.md) | GET | `/v1/storefront/payment-gateways` | Public list of payment gateways offered by the store |
