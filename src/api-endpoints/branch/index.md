---
title: Branch Management Overview
---

# Branch Management

The Branch APIs allow merchants to manage multiple physical store locations, warehouses, or pickup centers. Each branch can have specific stock inventory, address information, and branch-specific price overrides.

## Available Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | [`/v1/branches`](./fetch-branches.md) | Retrieve all branches for the store. |
| `POST` | [`/v1/branches`](./create-branch.md) | Create a new branch. |
| `GET` | [`/v1/branches/{id}`](./get-branch.md) | Retrieve details of a specific branch. |
| `PATCH` | [`/v1/branches/{id}`](./update-branch.md) | Update branch information. |
| `DELETE` | [`/v1/branches/{id}`](./delete-branch.md) | Delete a branch. |
| `PATCH` | [`/v1/branches/{id}/online-branch`](./online-branch.md) | Designate a branch as the online fulfillment branch. |
| `GET` | [`/v1/branches/{id}/price-overrides`](./price-overrides.md) | List branch-specific price overrides. |
| `PUT` | [`/v1/branches/{id}/price-overrides`](./price-overrides.md) | Set or update a branch-specific price override. |
| `DELETE` | [`/v1/branches/{id}/price-overrides`](./price-overrides.md) | Clear a branch-specific price override. |
| `GET` | [`/v2/branches/lookup`](./lookup-branches.md) | Paginated minimal branch lookup for dropdowns and filters. |
