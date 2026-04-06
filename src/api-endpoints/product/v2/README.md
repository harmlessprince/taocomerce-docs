---
title: Product API V2
---

# Product API V2 (New)

The **Product V2 API** is the next generation of our product management architecture. It is designed to be flexible, scalable, and category-agnostic. 

Unlike the classic V1 API, which had hardcoded fields for "RAM," "Storage," and "Size," V2 uses a **Generic Attribute System**. This means you can define any property you need (like "Material," "Voltage," or "Inseam") without being limited by a fixed schema.

## Key Concepts

### 1. Product Types
Every V2 product follows one of these four structures:

*   **SIMPLE**: A standard product with one price and one stock level (e.g., a specific book).
*   **VARIABLE**: A product with multiple options grouped together (e.g., a Shirt available in different Colors and Sizes).
*   **DIGITAL**: A non-physical product like a software license or an e-book.
*   **BUNDLE**: A package deal composed of multiple existing products.

### 2. Attributes
Attributes are the building blocks of your product details. They are simple key-value pairs.
*   **V1 (Old)**: Used `ramSize: "8GB"`.
*   **V2 (New)**: Uses `attributes: { "RAM": "8GB" }`.

### 3. Variant Groups & SKUs
For **VARIABLE** products, we use a two-tier hierarchy:
*   **Variant Group**: Groups options by a physical characteristic (e.g., "Color: Midnight Blue").
*   **SKU (Stock Keeping Unit)**: The actual purchasable item with its own price and stock (e.g., the "Large" size of the "Midnight Blue" shirt).

## Why use V2?
*   **No Limits**: Add any custom data you want.
*   **Better Organization**: Group variations logically rather than flattening them.
*   **Future Proof**: Designed to support complex retail workflows (Bundles, Digital goods).

## Next Steps
*   [How to Create a Product (V2)](./add-product.md)
*   [Fetching and Filtering (V2)](./fetch-products.md)
*   [Managing Variant Groups](./manage-variant-groups.md)
*   [Managing SKUs](./manage-skus.md)
