---
title: Get Storefront Product
---

# Get Storefront Product

Use these endpoints to get one product for a product page. You can find a product by its ID or by its slug.

## Get a product by ID
**GET** `/v1/storefront/products/{productId}`

| Path parameter | Type | Description |
|---|---|---|
| `productId` | string | ID of the product. |

## Get a product by slug
**GET** `/v1/storefront/products/slug/{slug}`

| Path parameter | Type | Description |
|---|---|---|
| `slug` | string | Unique slug of the product. |

## Headers
```json
{
  "X-MerchantApiKey": "MERCHANT_API_KEY"
}
```

## Example request
```javascript
fetch('https://api.shopsynch.com/v1/storefront/products/slug/professional-dslr-camera-0001', {
  method: 'GET',
  headers: { 'X-MerchantApiKey': 'MERCHANT_API_KEY' }
})
  .then(response => response.json())
  .then(data => console.log(data));
```

## Response 200
```json
{
  "data": {
    "id": "679f8f5a3b5f2173201c2582",
    "name": "Professional DSLR Camera",
    "slug": "professional-dslr-camera-0001",
    "description": "24.2 MP DSLR camera",
    "summary": "24.2 MP DSLR camera",
    "image": "https://example.com/camera.jpg",
    "images": ["https://example.com/camera.jpg"],
    "productType": "VARIABLE",
    "price": 899.0,
    "newPrice": 899.0,
    "discount": 0,
    "effectivePrice": 899.0,
    "isOnSale": false,
    "attributes": { "Megapixels": "24.2 MP" },
    "brand": "Example",
    "category": "Cameras",
    "categoryId": "66f42a129d0b",
    "variantGroups": [
      {
        "attributeName": "Color",
        "attributeValue": "Graphite Black",
        "skus": [
          { "price": 899.0, "quantityInStock": 45, "attributes": { "Storage": "64GB" } }
        ]
      }
    ],
    "availableQty": 45,
    "isArchived": false,
    "responseVersion": "v2"
  },
  "message": "Product retrieved",
  "status": true
}
```

### Product fields
The sample shows some of the fields.

| Field | Type | Description |
|---|---|---|
| `id`, `name`, `slug` | string | Identification of the product. |
| `description`, `summary`, `highlights` | string | Text for the product page. |
| `image`, `thumbnail`, `images` | string, array | Image URLs. |
| `productType` | string | `SIMPLE`, `VARIABLE`, `DIGITAL` or `BUNDLE`. |
| `price`, `newPrice`, `discount` | number | Price, price after discount, and discount. |
| `salesPrice`, `salesStartDate`, `salesEndDate`, `effectivePrice`, `isOnSale` | various | Sale price data. Show `effectivePrice` to the customer. |
| `attributes` | object | Product attributes. |
| `specifications`, `features`, `tags` | array | Product details. |
| `brand`, `category`, `categoryId` | string | Brand and category. |
| `variantGroups` | array | Variant groups. Each group has `skus`. Send the group ID and SKU ID when you [add the product to the cart](../cart/v2/add-item-to-cart.md). |
| `unitTrackingMode`, `unitCategory`, `baseUnitKey`, `unitTiers` | various | Selling unit data. |
| `availableQty` | number | Quantity that is available. |
| `availabilityMode`, `scheduledWindow`, `bookableSlot` | various | Pre-order and booking settings. |
| `rating` | integer | Product rating. |
| `isArchived` | boolean | `true` if the product is archived. |

## Error responses
| Status | Message |
|---|---|
| `400` | 'PRODUCT' is no longer available. |
| `404` | Product not found |

## Next steps
- [Add Item to Cart (V2)](../cart/v2/add-item-to-cart.md)
- [Similar and top selling products](./similar-and-top-selling.md)
