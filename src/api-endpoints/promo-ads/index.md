---
title: Promo Ads API Overview
---

# Promo Ads Management

The Promo Ads API provides endpoints to create, publish, update, and display promotional banners and call-to-action cards across your storefront and landing pages.

## Endpoints

| Endpoint | Method | Path | Description |
| :--- | :--- | :--- | :--- |
| [Fetch Promo Ads](./fetch-promo-ads.md) | GET | `/v1/promo-ads` | List store promo ads with cursor pagination |
| [Fetch Published Promo Ads](./fetch-published-promo-ads.md) | GET | `/v1/promo-ads/published` | Public list of active published banners |
| [Get Promo Ad Details](./get-promo-ad.md) | GET | `/v1/promo-ads/{id}` & `/by-slug/{slug}` | View banner details by ID or slug |
| [Add Promo Ad](./add-promo-ad.md) | POST | `/v1/promo-ads` | Create a new promotional banner |
| [Update Promo Ad](./update-promo-ad.md) | PATCH | `/v1/promo-ads/{id}` | Update ad content, images, and CTA |
| [Update Ad Status](./update-ad-status.md) | PATCH | `/v1/promo-ads/update/{id}/status/{status}` | Publish or unpublish an ad |
| [Delete Promo Ad](./delete-promo-ad.md) | DELETE | `/v1/promo-ads/{id}` | Remove a promo ad |
