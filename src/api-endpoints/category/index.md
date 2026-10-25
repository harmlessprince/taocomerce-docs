---
title: Product Category API Overview
---

# Product Category API

The Category API provides endpoints for browsing system categories, managing store-specific categories, and retrieving nested category trees.

## Endpoints

| Endpoint | Method | Path | Description |
|---|---|---|---|
| [System Categories](./fetch-categories.md) | GET | `/v1/categories` | List all system categories |
| [Category Children](./category-children.md) | GET | `/v1/categories/{categoryId}/children` | List sub-categories under a parent |
| [Merchant Categories](./fetch-selected-categories.md) | GET | `/v1/tenant-categories` | List merchant's configured store categories |
| [Add Merchant Category](./add-category.md) | POST | `/v1/tenant-categories` | Add custom or system-backed category |
| [Update Tenant Category](./update-category.md) | PUT | `/v1/tenant-categories/{categoryId}` | Rename a custom store category |
| [Delete Tenant Category](./delete-category.md) | DELETE | `/v1/tenant-categories/{categoryId}` | Remove category from store |
