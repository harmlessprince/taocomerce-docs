---
title: Customer API
---

# Customer API

Use the Customer API to view and manage customer accounts, profile details, order histories, and customer lookups.

## Endpoints

| Endpoint | Method | Path | Description |
|---|---|---|---|
| [Fetch Customers](./fetch-customers.md) | GET | `/v1/customers` | List registered customers |
| [Show Customer](./show-customer.md) | GET | `/v1/customers/{customerId}` | Get specific customer details |
| [Order-Based Customers](./order-based-customers.md) | GET | `/v1/customers/order-based` | Customers from orders (registered + guest) |
| [Lookup Customers (V2)](./lookup-customers.md) | GET | `/v2/customers/lookup` | Paginated customer lookup for picker dropdowns |
| [Update Customer Profile](./update-customer.md) | PATCH | `/v1/customers/profile/update` | Update authenticated customer profile |
| [Activate Customer](./activate-customer.md) | PATCH | `/v1/customers/{customerId}/activate` | Reactivate customer account |
| [Deactivate Customer](./deactivate-customer.md) | PATCH | `/v1/customers/{customerId}/deactivate` | Deactivate customer account |
