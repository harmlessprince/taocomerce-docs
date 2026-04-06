---
title: Managing Variant Groups (V2)
---

# Managing Variant Groups (V2)

**Variant Groups** are used by **VARIABLE** products to organize different options into logical categories, like a "Midnight Blue" color group containing different storage sizes.

## 1. Add a Variant Group
Adds a new group with at least one SKU.

### Endpoint
**POST** `/v2/products/{productId}/variant-groups`

### JSON Sample
```json
{
  "attributeName": "Color",
  "attributeValue": "Sunset Red",
  "image": "https://example.com/red-variant.jpg",
  "colorId": "color_id_from_palette",
  "skus": [
    {
      "price": 499.00,
      "quantityInStock": 15,
      "attributes": { "Storage": "128GB" }
    }
  ]
}
```

---

## 2. Update a Variant Group
Partially update the metadata of an existing variant group (e.g., changing the hero image or the display color).

### Endpoint
**PATCH** `/v2/products/{productId}/variant-groups/{groupId}`

### JSON Sample
```json
{
  "attributeValue": "Flame Red",
  "image": "https://example.com/new-red-variant.jpg"
}
```
*Note: This operation only changes the group metadata. To update price or stock, use the [SKU Update](./manage-skus.md) endpoint.*

---

## 3. Remove a Variant Group
Deletes a variant group and all its associated SKUs.

### Endpoint
**DELETE** `/v2/products/{productId}/variant-groups/{groupId}`

---

## Fields Table

| Field | Type | Description |
| :--- | :--- | :--- |
| `attributeName` | string | The dimension name (e.g., Color, Material). |
| `attributeValue`| string | The display value (e.g., Red, Stainless Steel).|
| `image` | string | Hero image for this specific variant group. |
| `colorId` | string | Optional reference to our system color palette. |
| `skus` | list | Initial SKUs for the group (Required for POST). |
