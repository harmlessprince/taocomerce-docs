---
title: MCP Connector
description: Connect AI assistants and agents to ShopSynch with Model Context Protocol.
---

# MCP Connector

ShopSynch exposes a remote Model Context Protocol server for AI assistants, agent builders, and developer tools. An MCP client can connect to ShopSynch, ask for store context, and call approved commerce tools on behalf of an authenticated merchant.

## Official Connector Profile

Use this profile when configuring an MCP-compatible client or submitting ShopSynch for connector review.

```json
{
  "name": "ShopSynch",
  "displayName": "ShopSynch Assistant",
  "description": "Manage ShopSynch products, orders, customers, inventory, payments, promotions, reviews, warehouses, delivery zones, and store analytics from AI assistants.",
  "mcpUrl": "https://api.shopsynch.com/mcp",
  "transport": "streamable-http",
  "authentication": {
    "type": "oauth2",
    "authorizationServerMetadataUrl": "https://api.shopsynch.com/.well-known/oauth-authorization-server",
    "protectedResourceMetadataUrl": "https://api.shopsynch.com/.well-known/oauth-protected-resource",
    "dynamicClientRegistration": true,
    "pkce": true,
    "defaultScope": "mcp:store"
  },
  "fallbackAuthentication": {
    "type": "api-key",
    "headerName": "X-MerchantApiKey"
  },
  "privacyPolicyUrl": "https://www.shopsynch.com/privacy",
  "termsOfServiceUrl": "https://www.shopsynch.com/terms",
  "supportUrl": "https://www.shopsynch.com"
}
```

## Will It Work?

Yes, for clients that support remote MCP over Streamable HTTP.

OAuth-aware clients can discover the authorization server from ShopSynch's metadata endpoints and start the sign-in flow automatically. Clients that do not support OAuth discovery can still connect with a Merchant API key if they allow custom request headers.

Native marketplace installation is separate from MCP compatibility. For example, a ChatGPT app still needs an Apps SDK package and review before it appears as an installable ChatGPT app, even though the underlying ShopSynch MCP server is already usable.

## Connection URLs

| Purpose | URL |
| --- | --- |
| MCP server | `https://api.shopsynch.com/mcp` |
| Protected resource metadata | `https://api.shopsynch.com/.well-known/oauth-protected-resource` |
| Authorization server metadata | `https://api.shopsynch.com/.well-known/oauth-authorization-server` |
| Dynamic client registration | `https://api.shopsynch.com/oauth/register` |
| Authorization endpoint | `https://api.shopsynch.com/oauth/authorize` |
| Token endpoint | `https://api.shopsynch.com/oauth/token` |

## Supported Clients

| Client type | Status | Setup |
| --- | --- | --- |
| OAuth-aware remote MCP clients | Supported | Add `https://api.shopsynch.com/mcp`; the client should discover OAuth automatically. |
| Claude Desktop or Claude.ai connectors | Supported when remote MCP and OAuth are enabled in the client | Add the MCP server URL and approve access in the ShopSynch OAuth flow. |
| Antigravity, Cursor, VS Code, and agent IDEs | Supported when the client accepts remote MCP URLs | Add the MCP server URL. Use OAuth when available, or the Merchant API key fallback when headers are supported. |
| MCP Inspector | Supported | Use the server URL to test connection, OAuth flow, tool listing, and tool calls. |
| ChatGPT native app | Packaging required | Build a ChatGPT Apps SDK app that points to this MCP server, then submit it for review. |

## Authentication

ShopSynch supports two authentication methods for MCP.

### OAuth

Use OAuth for third-party AI apps and official connector flows.

The merchant signs in, selects a store when needed, and approves the requested scope. The AI client receives an access token and calls the MCP server with:

```json
{
  "Authorization": "Bearer ACCESS_TOKEN"
}
```

OAuth MCP access is live-environment access in the first version. Test-mode MCP remains available with Merchant API keys.

### Merchant API Key

Use Merchant API keys for internal scripts, local testing, and clients that do not support OAuth.

```json
{
  "X-MerchantApiKey": "MERCHANT_API_KEY"
}
```

## OAuth Scope

The current MCP scope is:

```text
mcp:store
```

This gives the connected AI client access to approved MCP tools for the selected store. It does not bypass ShopSynch account permissions, tenant scoping, or per-tool permission checks.

## Available Tool Areas

ShopSynch tools are exposed by capability area. The exact tool schema is returned by the MCP `tools/list` request.

| Area | Examples |
| --- | --- |
| Analytics | Revenue, order, customer, and product metrics |
| Products | List products, get product details, create products, validate SKUs, fetch templates, find similar products, top-selling products |
| Orders | List orders, get order details, get by order number, track orders, list statuses, get order items and history |
| Customers | List customers, get customer details, list customers by order behavior |
| Inventory | List inventory, get stock by SKU, low-stock checks, inventory logs |
| Payments | List payments, get payment by order, payment statuses, latest payment link |
| Categories | System categories, store categories, child categories |
| Promotions and Ads | List and inspect promotions, promo ads, and published promo ads |
| Reviews | List reviews and product reviews |
| Store Operations | Store profile, warehouses, delivery zones |

## Safety Rules

AI clients should follow these rules when using the connector:

- Confirm before creating or changing store data.
- Prefer natural identifiers such as order number, SKU, slug, or customer email before asking for database IDs.
- Use list tools to resolve IDs before calling detail or action tools.
- Do not invent product IDs, customer IDs, category IDs, warehouse IDs, or inventory IDs.
- Treat returned data as merchant-confidential.
- Keep OAuth tokens private and revoke access from the ShopSynch connected-apps settings when a client is no longer trusted.

## Example Client Config

For MCP clients that accept a remote server URL:

```json
{
  "mcpServers": {
    "shopsynch": {
      "url": "https://api.shopsynch.com/mcp"
    }
  }
}
```

For clients that require a manual API key header:

```json
{
  "mcpServers": {
    "shopsynch": {
      "url": "https://api.shopsynch.com/mcp",
      "headers": {
        "X-MerchantApiKey": "MERCHANT_API_KEY"
      }
    }
  }
}
```

## Review Checklist

Use this checklist before submitting ShopSynch to any app or connector marketplace:

- OAuth metadata endpoints are publicly reachable.
- `/mcp` accepts Streamable HTTP requests through the public gateway.
- Dynamic client registration works for public PKCE clients.
- Authorization code flow with PKCE completes in a real browser.
- Token refresh and grant revocation are verified with a real client.
- Tool names, descriptions, and JSON schemas are stable.
- Destructive tools require clear user confirmation in the client experience.
- Privacy policy, terms, support URL, logo, and app description are ready.

## Related Guides

- [OAuth for Connected Apps](oauth.md)
- [Authentication](authentication.md)
- [API Sandbox](api-reference.md)
