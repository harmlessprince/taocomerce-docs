---
title: Fetch Products (V2)
---

# Fetch Products (V2)

The **Fetch Products V2** API allows you to retrieve a list of products or a single product's full details using the modern V2 architecture.

## Endpoint
**GET** `/v2/products`  
**GET** `/v2/products/{productId}`

## Authentication
Requires a standard Bearer Token and Merchant API Key in the headers.

---

## 🔍 Common Query Filters

Our V2 API introduces dynamic filtering based on the new architecture.

| Filter | Example | Description |
| :--- | :--- | :--- |
| `productType` | `?productType=VARIABLE` | Filter by type: SIMPLE, VARIABLE, DIGITAL, BUNDLE. |
| `attribute` | `?attribute=Color:Red` | Filter by generic attribute key-value pairs (Format: `Key:Value`). |
| `page` | `?page=0` | Paginated results (defaults to 0). |
| `limit` | `?limit=50` | Maximum results per page (defaults to 100). |
| `sortFieldParam` | `?sortFieldParam=PRICE` | Sort results (e.g., NAME, PRICE, CREATED_AT). |
| `sortDirectionParam`| `?sortDirectionParam=DESC`| Sort order: ASC or DESC. |
| `archived` | `?archived=true` | Filter by archived status. Default: `false`. |

> [!NOTE]
> By default, archived products are **not** returned. To fetch archived products, explicitly set `archived=true`.

---

## 📥 JSON Shape (Response Overview)

When fetching a V2 product, the response body includes all core properties, variant groups, and SKUs in a developer-friendly format.

### The Product Object (V2 Response)

```json
{
  "id": "prod_abc123",
  "name": "Professional DSLR Camera",
  "productType": "VARIABLE",
  "price": 899.00,
  "attributes": {
    "Megapixels": "24.2 MP",
    "Sensor Type": "CMOS"
  },
  "variantGroups": [
    {
      "attributeName": "Color",
      "attributeValue": "Graphite Black",
      "skus": [
        {
          "price": 899.00,
          "quantityInStock": 45,
          "attributes": { "Storage": "64GB" }
        }
      ]
    }
  ]
}
```

## Legacy Compatibility
Each V2 response object also contains the old V1 fields (like `ramSize`, `storage`, and `variations`) formatted to match the new content. This ensures that existing mobile or web apps won't break when upgrading to the V2 base.

---

## Related Endpoints
*   [Fetch Similar Products (ByCategory)](./fetch-products.md) - Returns the same V2 response shape.
*   [Top Selling Products](./fetch-top-selling-products.md) - Returns ranked products by sales volume.
