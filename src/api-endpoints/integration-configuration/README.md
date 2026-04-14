---
title: Integration Configuration
---

# Integration Configuration

When using ShopSynch as a headless backend for a custom storefront, certain API-driven flows — email verification, password reset, cart recovery, and OAuth sign-in — redirect users to URLs within your application. You must configure those URLs so ShopSynch knows where to send your users.

## Why This Matters

Without these configured, redirects fall back to ShopSynch's prebuilt pages. If you are building a custom storefront, your users will land on the wrong pages after actions like clicking a password reset link or completing an OAuth login.

## How to Configure

Navigate to your **ShopSynch Dashboard → General Settings → Integration Settings** and fill in the following values:

| Setting | Purpose | Default Path |
| :--- | :--- | :--- |
| **Base URL** | The root domain of your custom app (e.g., `https://myshop.com`) | _(required, no default)_ |
| **Email Verification Path** | Where users land after clicking the email verification link | `/verify-email` |
| **Reset Password Path** | Where users land after clicking the password reset link | `/reset-password` |
| **Cart Path** | Where users are redirected for cart and abandoned-cart recovery | `/cart` |
| **OAuth Success Redirect** | Where users are sent after a successful Google/OAuth sign-in | `/auth/callback` |
| **OAuth Error Redirect** | Where users are sent if OAuth sign-in fails | `/auth/error` |

> [!IMPORTANT]
> The **Base URL** is required. Without it, all redirect-based flows — email verification, password reset, and OAuth — will not work for your custom storefront.

## How It Works

The final redirect URL is built by combining your **Base URL** with the configured path. For example:

- Base URL: `https://myshop.com`
- Email Verification Path: `/verify-email`
- Result: `https://myshop.com/verify-email`

## Defaults

All path settings have sensible defaults (shown in the table above). If you only set the Base URL and leave the paths unchanged, all flows will redirect to those default paths on your domain. You only need to change a path if your application uses a different route.

## Next Steps

- [Authentication Overview](../authentication/README.md)
- [Google OAuth (Customer)](../authentication/login-with-google-as-customer.md)
- [Forgot Password](../authentication/forgot-password.md)
- [Reset Password](../authentication/reset-password.md)
