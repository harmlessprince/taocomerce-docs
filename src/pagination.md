---
title: Pagination
---

# Pagination

Endpoints that return a list of products use page-based pagination.

## Request parameters
| Parameter | Type | Description |
|---|---|---|
| `page` | integer | Page number. The first page is `0`. A value of `0` or less returns the first page. |
| `limit` | integer | Number of items on each page. The default value depends on the endpoint. |
| `sortFieldParam` | string | Field to sort by, for example `NAME`, `PRICE` or `CREATED_AT`. |
| `sortDirectionParam` | string | `ASC` or `DESC`. |

| Endpoint | Default `limit` |
|---|---|
| `GET /v2/products` | `100` |
| `GET /v1/storefront/products` | `20` |

## Response fields
| Field | Type | Description |
|---|---|---|
| `total` | integer | Total number of items that match the filters. |
| `totalPages` | integer | Total number of pages. |
| `currentPage` | integer | Current page. This value starts at `1`. |

> [!WARNING]
> The `page` request parameter starts at `0`. The `currentPage` response field starts at `1`. For `page=0`, the API returns `currentPage: 1`.

## Cursor pagination
`GET /v2/products` also supports cursor pagination. Set `withCursor=true`. In the next request, send the `cursor` value from the previous response (ISO 8601 instant).

## Example
```javascript
fetch('https://api.shopsynch.com/v1/storefront/products?page=1&limit=20', {
  headers: { 'X-MerchantApiKey': 'MERCHANT_API_KEY' }
})
  .then(response => response.json())
  .then(({ data }) => console.log(data.currentPage, data.totalPages));
```
