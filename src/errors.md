---
title: Errors
---

The ShopSynch API uses standard HTTP status codes to show if a request succeeded or failed.

## HTTP status codes

| Status | Name | Meaning |
|---|---|---|
| `200` | OK | The request succeeded. |
| `201` | Created | The API created a new resource, for example an order, a product, or a customer. |
| `400` | Bad Request | The request is not valid. A parameter is wrong, a required field is missing, or the data format is wrong. For example, the cart is empty at checkout. |
| `401` | Unauthorized | Authentication failed or is missing. The API key or the JWT token in the request is not valid. |
| `404` | Not Found | The resource does not exist. It was deleted or it never existed. |
| `422` | Unprocessable Entity | Validation failed. The data that you sent does not pass the required checks. The response lists each field with an error. |
| `5xx` | Server Error | An error occurred on the server. Report the error immediately. It can show a system problem. |

## Error response format
An error response has `status` set to `false` and a `message`.
```json
{
  "status": false,
  "message": "Your cart is empty. Please add items to your cart before proceeding."
}
```

## Handle errors
- Check the HTTP status code of each response.
- If authentication fails, make sure that the API key or the JWT token is valid and that you send it in the request headers.
- Retry a request only if the error is a `5xx` error.

## Error Reference

### Cart and Storefront Errors

| HTTP Status | Message | Description |
|---|---|---|
| `400` | Please log in or start a guest session to continue. | The request has no `Authorization` header and no `X-Session-Id` header. |
| `400` | Please start a guest session first. | A guest checkout request has no `X-Session-Id` header. |
| `410` | This v1 endpoint has been deprecated. Please integrate with the equivalent v2 endpoint. | You called a removed `/v1/products/*` or `/v1/carts/*` endpoint. See [Migrate from V1 to V2](api-endpoints/migrate-v1-to-v2.md). The `errorCode` is `API_VERSION_DEPRECATED`. |
| `400` | Your cart is empty. Please add items to your cart before proceeding. | You started checkout with an empty cart. |
| `400` | Please select all required options before adding this item to your cart. | A V2 add-to-cart request does not select a variant group and a SKU for a product that has options. |
| `400` | The requested quantity is more than what we have in stock. Only N items are available. | The quantity is more than the available stock. |
| `400` | 'PRODUCT' is no longer available. | The product is archived. |
| `404` | The specified item could not be found in your cart. | The cart item ID does not exist in the cart. |
| `404` | Product not found | The product ID or slug does not exist. |

### Promotion Errors

| HTTP Status | Error Code | Description |
|---|---|---|
| `400` | `INVALID_DISCOUNT_TYPE` | Unknown value passed for `discountType` |
| `400` | `DISCOUNT_VALUE_REQUIRED` | `discountValue` missing for `PERCENTAGE` or `FLAT_AMOUNT` |
| `400` | `QUANTITY_FIELDS_REQUIRED` | `requiredQuantity` or `freeQuantity` missing for `BUY_X_GET_Y` |
| `400` | `END_DATE_BEFORE_START_DATE` | `endDate` is before `startDate` |
| `400` | `INVALID_STATUS_TRANSITION` | Attempted an unsupported status transition |
| `400` | `CANNOT_SET_DEPLETED_STATUS` | `DEPLETED` cannot be set manually |
| `409` | `PROMOTION_CODE_ALREADY_EXISTS` | A promotion with that code already exists for your tenant |

### Order / Checkout Errors

| HTTP Status | Error Code | Description |
|---|---|---|
| `400` | `PROMOTION_NOT_ACTIVE` | The promotion code exists but is not currently active |
| `400` | `PROMOTION_MINIMUM_NOT_MET` | Order subtotal is below the promotion's `minimumOrderValue` |
| `400` | `PROMOTION_USAGE_LIMIT_REACHED` | The promotion has been fully redeemed |
| `400` | `PROMOTION_CUSTOMER_LIMIT_REACHED` | This customer has already used this promotion the maximum number of times |
| `404` | `PROMOTION_NOT_FOUND` | No promotion found for the provided code |
| `409` | `PROMOTION_ALREADY_APPLIED` | A promotion has already been applied to this order |

##  Next Steps
- Learn more about [Authentication](authentication.md)
<!-- - Explore available [API Endpoints](api-endpoints/index.md) -->


