---
title: OAuth for Connected Apps
---

# OAuth for Connected Apps

## What Is OAuth for Connected Apps?
OAuth for Connected Apps lets your app connect to a specific merchant's ShopSynch store. The merchant approves your app first. Your app never sees or stores the merchant's Merchant API key or password.

Use this OAuth flow for:
- AI agents and MCP clients (see [MCP (AI Agents)](mcp.md))
- Third-party apps that call the ShopSynch REST API directly

> [!NOTE]
> This page covers OAuth for third-party apps. If you want to add "Sign in with Google" for your own merchants or customers, read [Google Authentication](api-endpoints/authentication/google-authentication.md) instead.

## How the Flow Works
1. Your app registers with ShopSynch.
2. Your app sends the merchant to a ShopSynch sign-in and approval page.
3. The merchant signs in, picks a store, and approves the access your app requests.
4. ShopSynch sends the merchant back to your app with an authorization code.
5. Your app exchanges the code for an access token.
6. Your app uses the access token to call the ShopSynch API.

The steps below explain each part in detail.

## Step 1: Register Your App
Register your app with ShopSynch. Registration is free and does not need approval.

Send a `POST` request to:

```
https://api.shopsynch.com/oauth/register
```

Include your app's redirect URLs in the request body:

```json
{
  "client_name": "My App",
  "redirect_uris": ["https://myapp.example.com/callback"]
}
```

ShopSynch returns a `client_id` for your app:

```json
{
  "client_id": "GENERATED_CLIENT_ID",
  "client_name": "My App",
  "redirect_uris": ["https://myapp.example.com/callback"],
  "token_endpoint_auth_method": "none",
  "grant_types": ["authorization_code", "refresh_token"],
  "client_id_issued_at": 1735689600
}
```

Store this `client_id`. You need it in every step that follows.

> [!NOTE]
> ShopSynch does not issue a client secret. Your app must use PKCE, described in Step 2, to secure the flow instead.

## Step 2: Send the Merchant to Sign In and Approve Access
Create two random values in your app before this step:

1. A `code_verifier`: a random string.
2. A `code_challenge`: the SHA-256 hash of the `code_verifier`, encoded in Base64url.

This pair is called PKCE (Proof Key for Code Exchange). PKCE protects the flow from interception.

Open this URL in the merchant's browser:

```
https://api.shopsynch.com/oauth/authorize
```

Add these query parameters:

| Parameter | Required | Description |
|---|---|---|
| `response_type` | Yes | Always set this to `code`. |
| `client_id` | Yes | The `client_id` from Step 1. |
| `redirect_uri` | Yes | Must exactly match a URL you registered in Step 1. |
| `code_challenge` | Yes | The PKCE code challenge you created above. |
| `code_challenge_method` | Yes | Always set this to `S256`. |
| `state` | Yes | A random string. ShopSynch returns this value unchanged. Use it to confirm the response belongs to your request. |
| `scope` | No | A space-separated list of scopes. See the [Scopes](#scopes) section. If you omit this parameter, ShopSynch grants the `mcp:store` scope. |

The merchant sees a ShopSynch sign-in page. After sign-in, the merchant picks a store if they own more than one. The merchant then sees the access your app requests and approves or denies it.

## Step 3: Handle the Redirect
ShopSynch sends the merchant back to your `redirect_uri`.

**On approval**, the redirect includes a `code` and your original `state`:

```
https://myapp.example.com/callback?code=AUTH_CODE&state=YOUR_STATE
```

Confirm the `state` value matches the one you sent in Step 2. If it does not match, stop and reject the request.

**On denial or error**, the redirect includes an `error` parameter instead:

```
https://myapp.example.com/callback?error=access_denied&state=YOUR_STATE
```

## Step 4: Exchange the Code for an Access Token
Send a `POST` request to:

```
https://api.shopsynch.com/oauth/token
```

Use `application/x-www-form-urlencoded` and include:

```
grant_type=authorization_code
code=AUTH_CODE
redirect_uri=https://myapp.example.com/callback
client_id=YOUR_CLIENT_ID
code_verifier=YOUR_CODE_VERIFIER
```

ShopSynch returns an access token and a refresh token:

```json
{
  "access_token": "ACCESS_TOKEN",
  "refresh_token": "REFRESH_TOKEN",
  "token_type": "Bearer",
  "expires_in": 3600,
  "scope": "orders:read products:read"
}
```

`expires_in` is the number of seconds until the access token expires.

## Step 5: Call the ShopSynch API
Add the access token to every request:

```json
{
  "Authorization": "Bearer ACCESS_TOKEN"
}
```

**Example: call the REST API**
```bash
curl -X GET "https://api.shopsynch.com/v2/products" \
     -H "Authorization: Bearer ACCESS_TOKEN"
```

**Example: call the MCP server**
```bash
curl -X POST "https://api.shopsynch.com/mcp" \
     -H "Authorization: Bearer ACCESS_TOKEN" \
     -H "Content-Type: application/json" \
     -d '{"jsonrpc": "2.0", "method": "tools/list", "id": 1}'
```

## Refresh an Expired Access Token
Access tokens expire. Use the refresh token to get a new access token. Your app does not need to send the merchant through Step 2 again.

Send a `POST` request to:

```
https://api.shopsynch.com/oauth/token
```

Use `application/x-www-form-urlencoded` and include:

```
grant_type=refresh_token
refresh_token=YOUR_REFRESH_TOKEN
client_id=YOUR_CLIENT_ID
```

ShopSynch returns a new access token and a new refresh token, in the same shape as Step 4.

## Scopes
A scope defines what your app can do with the merchant's store. Request only the scopes your app needs.

| Scope | What It Allows |
|---|---|
| `mcp:store` | Full access to the store. Use this scope only for MCP agent tools. |
| `orders:read` | View orders and order history. |
| `orders:write` | Create, update, cancel, or refund orders. |
| `products:read` | View products, categories, and inventory. |
| `products:write` | Create, edit, or delete products. |
| `customers:read` | View customer details and profiles. |
| `customers:write` | Update or ban customer accounts. |
| `inventory:read` | View stock levels across warehouses. |
| `inventory:write` | Update stock quantities and manage warehouse inventory. |
| `analytics:read` | View and export store analytics and reports. |
| `promotions:read` | View promotions and discount rules. |
| `promotions:write` | Create, edit, or delete promotions. |
| `reviews:read` | View product reviews. |
| `reviews:write` | Manage and respond to product reviews. |
| `delivery:read` | View delivery options and delivery zones. |
| `delivery:write` | Manage delivery options and delivery zones. |
| `payments:read` | View payment records and payment links. |
| `payments:write` | Manage payment options and payment links. |
| `settings:read` | View store settings and audit logs. |
| `settings:write` | Manage store settings, domain whitelist, and API keys. |

> [!NOTE]
> A scope sets the upper limit of what your app can do. Your app can never do more than the merchant's own account already allows, even with a broad scope.

## Errors

| Status | Meaning |
|---|---|
| `401 Unauthorized` | The access token is missing, invalid, or expired. Refresh the token or ask the merchant to sign in again. |
| `403 Forbidden` | The access token does not have the scope needed for this action. |
| `503 Service Unavailable` | ShopSynch could not verify the token at this time. Retry the request. |

A `401` response includes a `WWW-Authenticate` header with more details about the error.

## Revoke Access
A merchant can remove your app at any time from their ShopSynch dashboard, under **Connected Apps**. Once removed, your access token and refresh token stop working immediately.

## Next Steps
- Connect an AI agent with [MCP (AI Agents)](mcp.md).
- Read about [Authentication](authentication.md).
