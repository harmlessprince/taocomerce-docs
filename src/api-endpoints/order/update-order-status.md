---
title: Update Order Status
---
Welcome to the **Order Status Update Guide** for ShopSynch API. This section explains how order statuses work, how they relate to payment, and what rules govern the flow of an order from creation to delivery.

Whether you're a developer, merchant, or store manager, this guide helps you understand how orders are tracked and what actions are allowed at each stage.

---

## What is an Order Status?
When a customer places an order, the system assigns it a **status** to describe where it is in the fulfillment process. These statuses change as the order moves through stages like payment, preparation, shipping, and delivery.

Each order also has:

- A **payment status** – tells whether the customer has paid.
- A **fulfillment status** – tracks if and how the order has been shipped and delivered.

---

## Types of Order Statuses

Here are the order statuses your application might encounter:

| Status      | What it Means |
|-------------|----------------|
| `PENDING`   | The order has been created but **not yet paid for**. |
| `PROCESSING`| Payment is successful. The order is now being prepared. |
| `SHIPPED`   | The order has been sent out for delivery. |
| `DELIVERED` | The customer has received the order. |
| `CANCELLED` | The order was cancelled before it was delivered. |
| `FAILED`    | The order couldn’t be processed (e.g., due to payment failure or other errors). |

---

## Payment Statuses

Your order also has a **payment status** that tells whether the payment was completed. These are the possible values:

| Payment Status | Description |
|----------------|-------------|
| `PENDING`      | No payment has been made yet. |
| `PROCESSING`   | The customer has initiated payment for the order. |
| `SUCCESS`      | The customer has paid successfully. |
| `FAILED`       | The payment failed. |
| `REFUNDED`     | The customer was refunded after a successful payment. |
| `ABANDONED`     | The customer was refunded after a successful payment. |

> **Important:** An order cannot move forward unless the payment is successful.

## Fulfillment Status

As the order is shipped and delivered, the system also updates a **fulfillment status**, which shows how far the order has progressed in delivery:

| Fulfillment Status | When It's Used |
|--------------------|----------------|
| `Unfulfilled`      | No items have been shipped yet. |
| `Partially Fulfilled` | Some or all items have been shipped. |
| `Fulfilled`        | The order has been delivered completely. |

---

##  Endpoint
- **URL:** `/v1/orders/{orderId}/status`
- **Method:** `PATCH`

##  Required Headers
```json
{
  "Authorization": "Bearer JWT_TOKEN",
  "X-MerchantId": "YOUR_MERCHANT_ID",
  "Content-Type": "application/json"
}
```

##  Example API Call (Using Fetch)
```javascript
fetch("https://api.shopsyncapi.com/v1/orders/679f8f5a3b5f2173201c2582/status", {
  method: "PATCH",
  headers: {
    "Authorization": "Bearer JWT_TOKEN",
    "X-MerchantId": "YOUR_MERCHANT_ID",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    status: "CANCELLED",
    reason: "No longer interested in order"
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));
```

## ✅ Sample 200 Response (Success)
```json
{
    "status": true,
    "message": "Order status updated",
    "data": null
}
```

## ❌ Sample 404 Response (Not Found Error)
```json
{
  "status": false,
  "message": "Order not found"
}
```


## How Order Statuses Change

ShopSynch controls how and when the order status can change. These rules are designed to follow real-world business logic. You **cannot** skip steps or move backward in ways that don't make sense (e.g., marking an unpaid order as delivered) except you use the manual api.

Below is an explanation of how the order moves through statuses:

---

### 🔄 1. From `Pending` ➡️ `Processing`

**What it means:** The customer has successfully paid.

**Conditions:**

- The order is still marked as "Pending"
- The payment status must be "Success"

> ✅ Once these are true, the order will move to **Processing**.

---

### 📤 2. From `Processing` ➡️ `Shipped`

**What it means:** The order has been packed and sent out for delivery.

**Condition:**

- The order must be in "Processing"

> ✅ Once shipped, the fulfillment status is updated to **Partially Fulfilled**.

---

### 📬 3. From `Shipped` ➡️ `Delivered`

**What it means:** The customer has received their order.

**Condition:**

- The order must already be marked as "Shipped"

> ✅ Fulfillment status is now updated to **Fulfilled**.

---

### ❌ Cancelling an Order

You can **cancel** an order if it hasn’t been delivered yet.

**Conditions:**

- Order must NOT be marked as "Delivered"

> ❗ You **cannot** cancel an order once it has been delivered.

---

### ⚠️ Marking an Order as `Failed`

An order may fail due to issues like payment errors or system failures.

**Note:**

- This can be triggered at any point if something goes wrong.
- The system marks it as `Failed` and no further status changes are allowed.

---

## 🚫 What is Not Allowed?

To protect the system from errors or abuse, ShopSync enforces these restrictions:

| Action | Why It's Not Allowed |
|--------|----------------------|
| Marking an order as `Processing` without payment | Prevents unpaid orders from being processed |
| Skipping steps (e.g., `Pending` → `Delivered`) | Ensures orders follow a logical flow |
| Cancelling a delivered order | Customers already have the product |
| Changing status after it’s `Failed` | Failed orders are locked for safety |

---

## 🧠 Best Practices

- ✅ Make sure payment is complete before changing status.
- ✅ Only use supported transitions (Pending → Processing → Shipped → Delivered).
- ⛔ Don’t try to skip steps.
- ⛔ Don’t mark failed or delivered orders as cancelled.
- 🔐 Use the `idempotencyKey` to avoid duplicate status updates due to retries.

---

## 📊 Visual Workflow

```plaintext
Pending
  │
  │ (Payment Success)
  ▼
Processing
  │
  │ (Packed & Shipped)
  ▼
Shipped
  │
  │ (Delivered to Customer)
  ▼
Delivered

* At any point before 'Delivered':
    → Can be Cancelled

* If an error occurs:
    → Status changes to Failed