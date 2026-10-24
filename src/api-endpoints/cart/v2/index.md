---
title: Cart V2 API
---

# Cart V2 API

Use the Cart V2 API for new integrations. Cart V2 works with V2 products. It supports variant groups, SKUs, selling units, pre-orders, and bookings.

The V2 endpoints use these authentication rules:
- An authenticated customer sends the `Authorization: Bearer JWT_TOKEN` header.
- A guest customer sends the `X-Session-Id` header. Use [Generate Cart Session ID](../generate-cart-session-id.md) to get a session ID.
- Every request must have the `X-MerchantApiKey` header.
- If a request has no token and no session ID, the API returns `400`: "Please log in or start a guest session to continue."

## Endpoints
| Endpoint | Method | Path |
|---|---|---|
| List cart items | GET | `/v2/carts/items` |
| [Add item to cart](./add-item-to-cart.md) | POST | `/v2/carts/add` |
| [Replace booking time](./replace-booking.md) | PATCH | `/v2/carts/booking/{cartItemId}` |
| Increase item quantity | PATCH | `/v2/carts/item/increment/quantity/{cartId}` |
| Decrease item quantity | PATCH | `/v2/carts/item/decrement/quantity/{cartId}` |
| Remove item | PATCH | `/v2/carts/remove/{cartItemId}` |
| Clear cart | DELETE | `/v2/carts/clear` |
| [Checkout](./checkout.md) | POST | `/v2/carts/checkout` |
| [Guest checkout](./checkout.md) | POST | `/v2/carts/guest/checkout` |

## Simple endpoints
These endpoints need only the headers. They have no request body.

| Endpoint | Path parameter | Response `data` | Response `message` |
|---|---|---|---|
| List cart items | | Array of [cart items](#cart-item-v2) | Success |
| Increase item quantity | `cartId` (ID of the cart item) | `null` | Item quantity increased |
| Decrease item quantity | `cartId` (ID of the cart item) | `null` | Item quantity decreased |
| Remove item | `cartItemId` | `null` | Item removed from cart |
| Clear cart | | `null` | Cart cleared successfully |

Example:
```javascript
fetch('https://api.shopsynch.com/v2/carts/items', {
  method: 'GET',
  headers: {
    'X-Session-Id': 'GUEST_SESSION_ID',
    'X-MerchantApiKey': 'MERCHANT_API_KEY'
  }
})
  .then(response => response.json())
  .then(data => console.log(data));
```

## Cart item (V2)
The list endpoint returns an array of cart items in the `data` field. The add and replace-booking endpoints return one cart item.

| Field | Type | Description |
|---|---|---|
| `id` | string | ID of the cart item. |
| `productId` | string | ID of the product. |
| `variantGroupId` | string or null | ID of the selected variant group. |
| `skuId` | string or null | ID of the selected SKU. |
| `customerId` | string or null | ID of the customer. |
| `sessionId` | string or null | Guest session ID. |
| `cartBasketId` | string | ID of the cart basket that holds the item. |
| `name`, `image` | string | Product name and image URL. |
| `price`, `newPrice`, `discount` | number | Unit price, unit price after discount, and discount. |
| `productType` | string | Product type, for example `SIMPLE` or `VARIABLE`. |
| `attributes` | object | Attributes of the selected SKU. |
| `sku` | string or null | Stock keeping unit. |
| `quantityInStock` | integer | Quantity that is available. |
| `quantity` | integer | Quantity in the cart. |
| `selectedUnitKey`, `selectedUnitLabel` | string or null | Selling unit that the customer selects. |
| `selectedUnitQuantity`, `unitMultiplierFromBase`, `baseQuantity`, `pricePerBaseUnit` | number or null | Unit values. |
| `tenantId` | string | ID of the store. |
| `availabilityMode` | string | Availability mode of the product. |
| `scheduledDate` | date or null | Date of a pre-order. |
| `bookingDate`, `bookingStartTime`, `bookingResourceId` | date, time, string or null | Booking details. |
| `serviceLocation` | object or null | Location for a service. |

## Common errors
| Status | Message |
|---|---|
| `400` | Please log in or start a guest session to continue. |
| `400` | The requested quantity is more than what we have in stock. Only N items are available. |
| `404` | The specified item could not be found in your cart. |

## Next steps
- [Add item to cart](./add-item-to-cart.md)
- [Checkout](./checkout.md)
