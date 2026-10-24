---
title: Cart API
---

# Cart API

Use the Cart API to manage the shopping cart of a customer. A customer can be authenticated or a guest.

> [!WARNING]
> The V1 cart endpoints (`/v1/carts/*`) are removed. The API returns `410 Gone`. See [Migrate from V1 to V2](../migrate-v1-to-v2.md).

## Authentication
- An authenticated customer sends the `Authorization: Bearer JWT_TOKEN` header.
- A guest customer sends the `X-Session-Id` header. To get a session ID, use [Generate Cart Session ID](./generate-cart-session-id.md).
- Every request must have the `X-MerchantApiKey` header.
- If a request has no token and no session ID, the API returns `400`: "Please log in or start a guest session to continue."

## Endpoints
| Endpoint | Method | Path |
|---|---|---|
| [Generate Cart Session ID](./generate-cart-session-id.md) | GET | `/v1/generate/session/id` |
| [Cart V2 endpoints](./v2/index.md) | | `/v2/carts/*` |
| [Add Item to Cart](./v2/add-item-to-cart.md) | POST | `/v2/carts/add` |
| [Replace Booking Time](./v2/replace-booking.md) | PATCH | `/v2/carts/booking/{cartItemId}` |
| [Checkout](./v2/checkout.md) | POST | `/v2/carts/checkout`, `/v2/carts/guest/checkout` |

## Next steps
- [Cart V2 endpoints](./v2/index.md)
- [Checkout](./v2/checkout.md)
