---
title: Cart API
---

# Cart API

##  Description
The **Cart API** provides endpoints for managing a user's shopping cart. Users can add, update, remove, and list items in their cart. The API supports both authenticated users and guest users.

##  Authentication Requirements
- **Authenticated Users**: Must provide a valid JWT token in the `Authorization` header.
- **Guest Users**: Must provide a `sessionId` to track their cart.
- The `X-MerchantId` header is **mandatory** for all requests.

##  Available Endpoints
- [Generate Cart Session](./generate-cart-session-id.md) *(For guest users)*
- [Add Item to Cart](./add-item-to-cart.md)
- [List Cart Items](./list-cart-items.md)
- [Increment Cart Item Quantity](./increment-cart-item.md)
- [Decrement Cart Item Quantity](./decrement-cart-item.md)
- [Remove Item from Cart](./remove-cart-item.md)
- [Clear Cart](./clear-cart.md)

##  Next Steps
- [Checkout API](./checkout.md)