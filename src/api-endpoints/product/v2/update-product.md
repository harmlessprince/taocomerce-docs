---
title: Update Product (V2)
---

# Update Product (V2)

The **Update Product V2** API allows you to partially update an existing product's fields, such as its name, description, price, stock, or generic attributes.

## Endpoint
**PATCH** `/v2/products/{productId}`

## Required Headers
```json
{
  "Authorization": "Bearer JWT_TOKEN",
  "X-MerchantApiKey": "MERCHANT_API_KEY",
  "Content-Type": "application/json"
}
```

## Update Logic
This endpoint uses **Partial Update** logic. You only need to send the fields you wish to change. Fields omitted from the request body will remain unchanged in the database.

> [!NOTE]
> To update a product image, first upload the new image via the [Upload Single Image](../../media-management/upload-single-image.md) endpoint and use the returned `id` as the value for the `image` field.

| Field | Type | Description |
| :--- | :--- | :--- |
| `name` | string | Product's new display name. |
| `price` | double | Updated base price. |
| `quantityInStock` | int | Updated stock count (e.g., set to 0 for out of stock). |
| `image` | string | File ID of the new primary image (from the [upload endpoint](../../media-management/upload-single-image.md)). |
| `attributes` | map | Merged with existing attributes. |

---

## 📥 JSON Sample Body

### Updating a Simple Product's Price and Attributes
If you want to update the price and add a new "Warranty" attribute, send the following:

```json
{
  "price": 49.99,
  "attributes": {
    "Warranty": "2 Years"
  }
}
```

### Changing the Category
You can easily move a product to a different category:
```json
{
  "categoryId": "cat_home_appliances_789"
}
```

### Replacing the Product Image
Upload the new image first, then pass its `id` here:
```json
{
  "image": "file_newimage987abc"
}
```

## Important Considerations
*   **Variant Groups & SKUs**: While you can update root-level fields here, managing the actual options for a VARIABLE product (like colors or sizes) should be done through the [Variant Group](./manage-variant-groups.md) and [SKU](./manage-skus.md) management endpoints.
*   **Legacy Sync**: Changes made through this V2 endpoint will automatically satisfy any mobile or legacy clients still reading the V1 response format.

---

## Response
Returns a standard Success response with the updated product object in the V2 JSON shape.
```json
{
  "status": true,
  "message": "Product updated",
  "data": { ... }
}
```
