---
title: Promotion Code API Overview
---

# Promotion Code Management

The Promotion Code API allows merchants to create and manage promotional discount campaigns, validate candidate coupon codes, preview cart totals with applied discounts, and bulk-generate unique voucher codes.

## Endpoints

| Endpoint | Method | Path | Description |
| :--- | :--- | :--- | :--- |
| [Fetch All Promotions](./fetch-promotions.md) | GET | `/v1/promotions` | List promotional campaigns |
| [Create Promotion](./add-promotions.md) | POST | `/v1/promotions` | Create a promotion with discount rules |
| [Show Promotion](./show-promotions.md) | GET | `/v1/promotions/{promotionId}` | Get promotion details |
| [Update Promotion](./update-promotions.md) | PATCH | `/v1/promotions/{promotionId}` | Update promotional rules |
| [Delete Promotion](./delete-promotions.md) | DELETE | `/v1/promotions/{promotionId}` | Remove a promotion |
| [Apply Promo Code](./apply-promotion-code.md) | POST | `/v1/promotions/apply/promo-code` | Apply code to a cart session |
| [Preview Cart Promotions](./preview-promotions.md) | POST | `/v1/promotions/preview` | Price cart against promo code and automatic discounts |
| [Check Code Availability](./check-code-availability.md) | GET / POST | `/v1/promotions/check-code(s)-availability` | Check single or multiple codes for clashes |
| [Promotion Lifecycle](./promotion-lifecycle.md) | POST | `/v1/promotions/{id}/publish,pause...` | Transition status (publish, pause, resume, archive, duplicate) |
| [Unique Codes Management](./promotion-codes.md) | GET / POST | `/v1/promotions/{id}/codes...` | Generate, list, disable, and export unique single-use codes |
| [Statistics and Summary](./promotion-stats.md) | GET | `/v1/promotions/summary,stats...` | Performance KPIs, summary, and order redemptions |
