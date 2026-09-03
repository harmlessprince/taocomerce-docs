---
title: MCP Connector
description: Connect AI assistants and agents to ShopSynch with Model Context Protocol.
---

# MCP Connector

ShopSynch exposes a public Model Context Protocol server for AI assistants, agent builders, and developer tools.

The connector lets approved AI clients help merchants work with their ShopSynch store through a secure, permission-based connection. Typical use cases include store insights, product workflows, order support, customer context, inventory checks, and operational reporting.

## Official Connector Profile

Use this profile when configuring a compatible MCP client or preparing a ShopSynch connector submission.

```json
{
  "name": "shopsynch",
  "displayName": "ShopSynch",
  "description": "Connect AI assistants to ShopSynch so merchants can work with products, orders, customers, inventory, payments, and store analytics.",
  "mcpUrl": "https://api.shopsynch.com/mcp",
  "transport": "streamable-http",
  "authentication": {
    "type": "oauth2",
    "authorizationServerMetadataUrl": "https://api.shopsynch.com/.well-known/oauth-authorization-server",
    "protectedResourceMetadataUrl": "https://api.shopsynch.com/.well-known/oauth-protected-resource",
    "pkce": true,
    "defaultScope": "mcp:store"
  },
  "privacyPolicyUrl": "https://www.shopsynch.com/privacy",
  "termsOfServiceUrl": "https://www.shopsynch.com/terms",
  "supportUrl": "https://www.shopsynch.com/contact"
}
```

## Compatibility

ShopSynch works with MCP clients that support remote MCP over Streamable HTTP.

| Client type | Status |
| --- | --- |
| OAuth-aware remote MCP clients | Supported |
| Claude Desktop or Claude.ai connectors | Supported when remote MCP and OAuth are enabled in the client |
| Cursor, Antigravity, VS Code, and agent IDEs | Supported when the client accepts remote MCP server URLs |
| ChatGPT native app | Requires a ChatGPT app package and marketplace review |

Native marketplace installation is separate from MCP compatibility. A client may support the ShopSynch MCP server directly before it appears as a one-click installable marketplace app.

## Authentication

ShopSynch MCP uses OAuth for third-party AI apps and official connector flows.

Merchants sign in to ShopSynch, review the requested access, and approve the connection before an AI client can access store data. OAuth access does not bypass ShopSynch account permissions, tenant scoping, or per-tool permission checks.

ShopSynch does not recommend sharing private API keys directly with third-party AI tools.

## Available Tool Areas

ShopSynch MCP tools are exposed by capability area. Exact tool availability may vary by account, permission, environment, and client support.

| Area | Examples |
| --- | --- |
| Analytics | Revenue, order, customer, and product metrics |
| Products | Product listing, product details, catalog workflows, SKU checks |
| Orders | Order lookup, order status, order history, fulfillment context |
| Customers | Customer lookup and order behavior context |
| Inventory | Stock checks, inventory status, low-stock context |
| Payments | Payment lookup, payment status, payment link context |
| Categories | Store categories and product classification |
| Promotions and Ads | Promotion and campaign context |
| Reviews | Store and product review context |
| Store Operations | Store profile, warehouses, delivery zones, and operating context |

## Safety Rules

When using ShopSynch with an AI assistant:

- Review what the assistant wants to do before approving changes.
- Do not share private API keys, passwords, or dashboard credentials in chat.
- Only connect clients you trust.
- Revoke access from your ShopSynch account settings when a client is no longer needed.
- Treat store, customer, order, and payment data as confidential.

## Quickstart

Use the configs below to connect ShopSynch to your AI tool directly. The MCP server uses OAuth by default — your tool will open a browser window to authorise access to your store the first time you connect.

### Claude Desktop

Edit `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS) or `%APPDATA%\Claude\claude_desktop_config.json` (Windows):

```json
{
  "mcpServers": {
    "shopsynch": {
      "command": "npx",
      "args": ["-y", "mcp-remote", "https://api.shopsynch.com/mcp"]
    }
  }
}
```

Restart Claude Desktop after saving. ShopSynch will appear in the tools list.

### Cursor

Create or edit `.cursor/mcp.json` in your project root (or `~/.cursor/mcp.json` globally):

```json
{
  "mcpServers": {
    "shopsynch": {
      "url": "https://api.shopsynch.com/mcp"
    }
  }
}
```

Cursor will prompt you to authenticate with ShopSynch on first use.

### Antigravity / VS Code (Remote MCP)

Any MCP client that accepts a remote server URL can connect directly:

```
https://api.shopsynch.com/mcp
```

Transport: `streamable-http`. No local process required.

### Claude Code (CLI)

```bash
claude mcp add --transport http shopsynch https://api.shopsynch.com/mcp
```

### API Key Authentication (No OAuth)

If your tool or script does not support OAuth, you can use an API key header instead:

```
X-MerchantApiKey: pk_live_<your-key>
```

API keys are available in your [ShopSynch merchant dashboard](https://dashboard.shopsynch.com). This bypasses the OAuth consent flow and authenticates the key's owning store directly.

---

## Machine-Readable Discovery

AI agent hosts and MCP indexers can auto-discover ShopSynch by fetching:

```
GET https://api.shopsynch.com/.well-known/mcp.json
```

This returns a JSON document with the MCP endpoint URL, transport type, OAuth metadata pointers, and authentication options — no credentials required.

```json
{
  "name": "shopsynch",
  "displayName": "ShopSynch",
  "description": "Connect AI assistants to ShopSynch...",
  "mcpUrl": "https://api.shopsynch.com/mcp",
  "transport": "streamable-http",
  "authentication": {
    "type": "oauth2",
    "authorizationServerMetadataUrl": "https://api.shopsynch.com/.well-known/oauth-authorization-server",
    "protectedResourceMetadataUrl": "https://api.shopsynch.com/.well-known/oauth-protected-resource",
    "pkce": true,
    "defaultScope": "mcp:store",
    "alternativeHeader": "X-MerchantApiKey"
  },
  "documentationUrl": "https://docs.shopsynch.com/mcp"
}
```

---

## Related Guides

- [OAuth for Connected Apps](oauth.md)
- [Authentication](authentication.md)
- [API Sandbox](api-reference.md)
