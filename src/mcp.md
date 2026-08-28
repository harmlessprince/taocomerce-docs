---
title: MCP (AI Agents)
---

# MCP (AI Agents)

## What Is MCP?
MCP stands for Model Context Protocol. MCP is an open standard. MCP lets AI assistants and AI agents connect to external services.

ShopSynch runs an MCP server. An AI agent can connect to this server. The agent can then read and manage your store data on your behalf.

Examples of AI agents that support MCP:
- Claude Desktop and Claude.ai connectors
- MCP Inspector (a developer tool for testing MCP connections)
- Custom agents that you build yourself

## What Can an MCP Agent Do?
An MCP agent can perform the same actions as the ShopSynch API. This includes:

- View and manage products
- View orders
- View customers
- Check inventory and stock levels
- View store analytics
- View and manage promotions
- View product reviews
- View delivery zones
- View your store profile

An MCP agent never gets more access than your account allows. Every action still follows your own account permissions.

## Connect to the ShopSynch MCP Server
Use this URL to connect:

```
https://api.shopsynch.com/mcp
```

The server uses the Streamable HTTP transport.

## Authenticate Your Connection
You can connect to the MCP server in two ways.

### Option 1: Merchant API Key
Use this option for your own scripts and internal tools.

Add your Merchant API key to the request header:

```json
{
  "X-MerchantApiKey": "MERCHANT_API_KEY"
}
```

### Option 2: OAuth (Recommended for AI Apps)
Use this option when you connect a third-party AI app, such as Claude or a custom agent you did not build yourself.

OAuth lets a store owner approve access to their store. The store owner does not need to share their Merchant API key.

Read the [OAuth for Connected Apps](oauth.md) guide for full setup steps.

Once you have an access token, add it to the request header:

```json
{
  "Authorization": "Bearer ACCESS_TOKEN"
}
```

## Connect Through an AI Client
Most AI clients that support MCP handle the connection for you. Follow these steps:

1. Open your AI client's connector or integration settings.
2. Enter the MCP server URL: `https://api.shopsynch.com/mcp`.
3. If the client supports OAuth, it starts the OAuth flow automatically. Sign in and approve access when prompted.
4. If the client only supports a manual header, add your Merchant API key as shown above.

## Errors
A request without a valid Merchant API key or access token returns a `401 Unauthorized` response. The response includes a `WWW-Authenticate` header. OAuth-aware clients use this header to start the sign-in process automatically.

## Next Steps
- Set up [OAuth for Connected Apps](oauth.md).
- Read about [Authentication](authentication.md).
