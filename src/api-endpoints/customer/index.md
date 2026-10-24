---
title: Customer API
---

# Customer API

Use the Customer API to view and manage customer accounts, profile details, and account status.

## Endpoints
| Endpoint | Method | Path | Description |
|---|---|---|---|
| [Fetch Customers](./fetch-customers.md) | GET | `/v1/customers` | List registered customers |
| [Show Customer](./show-customer.md) | GET | `/v1/customers/{customerId}` | Get specific customer details |
| [Update Customer Profile](./update-customer.md) | PATCH | `/v1/customers/profile/update` | Update authenticated customer profile |
| [Activate Customer](./activate-customer.md) | PATCH | `/v1/customers/{customerId}/activate` | Reactivate customer account |
| [Deactivate Customer](./deactivate-customer.md) | PATCH | `/v1/customers/{customerId}/deactivate` | Deactivate customer account |
