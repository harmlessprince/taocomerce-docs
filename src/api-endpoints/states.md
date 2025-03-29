---
title: Fetch States by Country ID
---

# Fetch States by Country ID

## 📌 Description
The **Fetch States by Country ID** API allows users to retrieve a list of states for a specific country using its unique identifier. This endpoint does not require authentication.

## 🔗 Endpoint
**GET** `/v1/states/{countryId}`

## 🛠️ Path Parameters
| Parameter   | Type   | Required | Description |
|------------|--------|----------|-------------|
| `countryId` | string | Yes      | The unique identifier of the country. |

## 📡 Example API Call (Fetch or Axios)
```javascript
fetch('https://api.shopsynch.com/v1/states/679e8caa72d06732223ab672', {
  method: 'GET'
})
.then(response => response.json())
.then(data => console.log(data));
```

## 📤 Sample 200 Response (Success)
```json
{
    "status": true,
    "message": "success",
    "data": [
        {
            "createdAt": "2025-02-01T22:05:46.366",
            "updatedAt": "2025-02-01T22:05:46.366",
            "id": "679e8caa72d06732223ab673",
            "name": "Lagos",
            "status": true
        },
        {
            "createdAt": "2025-02-01T22:05:46.401",
            "updatedAt": "2025-02-01T22:05:46.401",
            "id": "679e8caa72d06732223ab674",
            "name": "Osun",
            "status": true
        },
        {
            "createdAt": "2025-02-01T22:05:46.413",
            "updatedAt": "2025-02-01T22:05:46.413",
            "id": "679e8caa72d06732223ab675",
            "name": "Oyo",
            "status": true
        },
        {
            "createdAt": "2025-02-01T22:05:46.42",
            "updatedAt": "2025-02-01T22:05:46.42",
            "id": "679e8caa72d06732223ab676",
            "name": "Ekiti",
            "status": true
        }
    ]
}
```

## 🔗 Next Steps
- [Fetch All Countries](./country.md)
