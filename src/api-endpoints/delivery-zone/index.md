---
title: Delivery Zone API
---

# Delivery Zone API

Use the Delivery Zone API to configure shipping fees, estimated delivery durations, and geographical boundaries (country, states, and coverage areas).

## Endpoints
| Endpoint | Method | Path | Description |
|---|---|---|---|
| [Create Delivery Zone](./create-delivery-zone.md) | POST | `/v1/delivery-zones` | Create a new delivery zone |
| [Fetch Delivery Zones](./fetch-delivery-zones.md) | GET | `/v1/delivery-zones` | List all delivery zones for the store |
| [Match Delivery Zone](./match-delivery-zone.md) | POST | `/v1/delivery-zones/match` | Find cheapest active zone for destination address |
| [Update Delivery Zone](./update-delivery-zone.md) | PUT | `/v1/delivery-zones/{id}` | Update delivery zone details and coverage |
| [Pause or Resume Zone](./update-zone-status.md) | PATCH | `/v1/delivery-zones/{id}/status` | Toggle zone active/paused state |
| [Delete Delivery Zone](./delete-delivery-zone.md) | DELETE | `/v1/delivery-zones/{id}` | Permanently delete a delivery zone |

## Public Storefront Endpoints
- `GET /v1/storefront/delivery-zones`: Returns all active delivery zones configured for the current storefront.
- `POST /v1/storefront/delivery-zones/match`: Matches destination address to calculate delivery fees for shoppers without merchant authentication.
