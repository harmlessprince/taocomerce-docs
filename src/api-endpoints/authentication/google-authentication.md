---
title: Google Authentication
---

# Google Authentication

ShopSynch provides a unified API for Google OAuth2.0 authentication. The platform manages the Google Cloud Console credentials, so you only need to integrate the following endpoints to enable "Sign in with Google" for your Merchants or Customers.

## Overview

There are two ways to integrate:
1.  **Server-Side Flow (Redirect)**: Redirect the user to ShopSynch, and we handle the handshake with Google.
2.  **Client-Side Flow (Verify ID Token)**: You use a Google SDK to get an `idToken` and pass it to us for session generation.

---

## 🚀 Option 1: Server-Side Flow (Redirect)

This is the recommended integration as it handles everything backend-to-backend.

### 1. Initiate Authentication
Redirect your user to the appropriate initiation endpoint. 

#### **For Merchants (Store Owners)**
- **Endpoint**: `GET /v1/auth/social/google/merchant/initiate`
- **Optional Parameter**:
  - `redirectUrl` (String): The URL you want the user to be sent to after login (e.g., `https://dashboard.com/auth/callback`).

#### **For Customers (Storefront Users)**
- **Endpoint**: `GET /v1/auth/social/google/customer/initiate`
- **Required Identifier (Pass one of these)**:
  - `apiKey`: Your Merchant API Key (Live or Test).
  - `domain`: Your store domain.
- **Optional Parameters**:
  - `redirectUrl` (String): Overrides the default callback destination configured in your store settings.
  - `errorRedirectUrl` (String): A dedicated URL for handling authentication failures (e.g., `https://mysite.com/auth-error`).

> [!TIP]
> **Session Tracking**: Pass an `X-Session-Id` header during the initiate call if you wish to track the user's session before they sign in (e.g., for persisting an anonymous cart).

### 2. Handle the Result
Once authenticated, ShopSynch redirects the user to your callback URL with the following query parameters:

| Parameter | Description |
| :--- | :--- |
| `token` | The JWT session token for subsequent API calls. |
| `refreshToken` | Used to refresh the session when the token expires. |
| `expiresIn` | Token expiration time in milliseconds. |
| `merchant` | (Customers Only) Your store domain. |

---

## 🛡️ Option 2: Client-Side Flow (Verify ID Token)

Use this if you already have an `idToken` from a Google SDK (e.g., Firebase, React Google Login).

### **For Merchants**
`POST /v1/auth/social/google/merchant/verify`
```json
{
  "idToken": "GOOGLE_ID_TOKEN"
}
```

### **For Customers**
`POST /v1/auth/social/google/customer/verify`
```json
{
  "idToken": "GOOGLE_ID_TOKEN",
}
```

---

## ⚠️ Error Handling & Redirection

Failed authentication attempts will always redirect the user back to your storefront with error details instead of showing a JSON message.

### Common Error Codes:
- `access_denied`: The user cancelled the Google consent screen.
- `invalid_state`: The security handshake timed out (usually after 10+ minutes).
- `server_error`: An internal failure occurred during account provisioning or validation.

---

## 💻 Integration Example (Frontend)

### Step 1: Trigger Native Redirect
```javascript
function handleGoogleLogin() {
    const baseUrl = "https://api.shopsynch.com/v1/auth/social/google/customer/initiate";
    const apiKey = "pk_live_xxxxxx";
    const successUrl = window.location.origin + "/callback";
    const errorUrl = window.location.origin + "/error-page";
    
    // Pass both success and failure destinations
    const params = new URLSearchParams({
        "X-MerchantApiKey": apiKey,
        "redirectUrl": successUrl,
        "errorRedirectUrl": errorUrl
    });

    window.location.href = `${baseUrl}?${params.toString()}`;
}

```

### Step 2: Handle Callback on Your Site
On your `/callback` page, extract the tokens from the URL.
```javascript
useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    const error = params.get('error');

    if (token) {
        localStorage.setItem('session_token', token);
        window.location.href = "/dashboard";
    } else if (error) {
        console.error("Authentication failed:", error);
        alert("Sign in failed. Please try again.");
    }
}, []);
```

---

## Side Effects to Note
- **Auto-Provisioning**: For new merchants, a default store is automatically created upon first Google sign-in.
- **Account Linking**: If a user already has an account with the same email, it will be automatically linked to their Google identity.
