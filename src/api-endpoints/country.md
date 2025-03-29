---
title: Fetch All Countries
---

# Fetch All Countries

## 📌 Description
The **Fetch All Countries** API allows users to retrieve a list of countries. This endpoint does not require authentication and can be used to fetch country details optionally filtered by name.

## 🔗 Endpoint
**GET** `/v1/countries`

## 🛠️ Query Parameters
| Parameter | Type   | Required | Description |
|-----------|--------|----------|-------------|
| `name`    | string | No       | Filter countries by name. |

## 📡 Example API Call (Fetch or Axios)
```javascript
fetch('https://api.shopsynch.com/v1/countries?name=nigeria', {
  method: 'GET'
})
.then(response => response.json())
.then(data => console.log(data));
```

## 📤 Sample 200 Response (Success)
```json
{
    "data": [
        {
            "createdAt": "2025-02-01T22:05:46.286",
            "updatedAt": "2025-02-01T22:05:46.286",
            "id": "679e8caa72d06732223ab66d",
            "name": "Australia",
            "status": true,
            "states": null
        },
        {
            "createdAt": "2025-02-01T22:05:46.298",
            "updatedAt": "2025-02-01T22:05:46.298",
            "id": "679e8caa72d06732223ab66e",
            "name": "Canada",
            "status": true,
            "states": null
        }
    ],
    "message": "Success",
    "status": true
}
```

## 🔗 Next Steps
- [Fetch States by Country](./states.md)
