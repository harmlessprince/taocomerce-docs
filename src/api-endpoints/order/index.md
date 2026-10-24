---
title: Order API Overview
---

# Order Management API

The Order Management API provides endpoints to retrieve, create, and track orders placed in your store, manage line items, and coordinate shipment logistics.

## Endpoints

| Endpoint | Method | Path | Description |
| :--- | :--- | :--- | :--- |
| [Fetch Orders](./fetch-orders.md) | GET | `/v1/orders` | Retrieve paginated list of store orders |
| [Create Merchant Order](./create-order.md) | POST | `/v1/orders` | Create an order programmatically for a customer |
| [Fetch Order by Order Number](./fetch-order-by-order-number.md) | GET | `/v1/orders/{orderNumber}/show` | Get order details by human-readable number |
| [Fetch Order Detail](./fetch-order-detail.md) | GET | `/v1/orders/{orderId}/detail` | Full order detail for merchant |
| [Fetch Order Line Items](./show-order-items.md) | GET | `/v1/orders/{orderId}/items` | List line items in an order |
| [Cancel Line Item](./cancel-order-line-item.md) | PATCH | `/v1/orders/{orderId}/items/{lineId}/cancel` | Cancel an individual order line item |
| [Update Order Status](./update-order-status.md) | PATCH | `/v1/orders/{orderId}/status` | Transition order status |
| [Get Order Statuses](./order-statuses.md) | GET | `/v1/orders/statuses` | List all supported order status codes |
| [Fetch Customer Orders](./fetch-customer-orders.md) | GET | `/v1/customer-orders` | Orders placed by authenticated customer |
| [Fetch Orders by Customer ID](./fetch-customer-orders-by-customer-id.md) | GET | `/v1/customer-orders/{customerId}` | Orders placed by a specific customer ID |
| [Fetch Customer Order Items](./fetch-customer-order-items.md) | GET | `/v1/customer-orders/{orderId}/items` | Line items in customer order |
| [Track Order History](./order-status-history.md) | GET | `/v1/order-status-history/{orderNumber}` | Public order tracking timeline |
| [Generate Order Waybill](./generate-waybill.md) | POST | `/v1/orders/{orderId}/logistics/waybill` | Generate logistics shipment waybill |
| [Track Shipment](./track-shipment.md) | GET | `/v1/orders/{orderId}/logistics/tracking` | Live shipment tracking with carrier |
