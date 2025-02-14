---
title: Specifications
---

# Specifications

## 📌 Description
The **Specifications API** provides a list of available product specifications that can be used to categorize and filter products effectively.

## 🔗 Endpoint
**GET** `/v1/specifications`

## 🛠️ Required Headers
No authentication is required for this request.

## 📡 Example API Call (Fetch or Axios)
```javascript
fetch('https://shopsyncapi.taoforge.org/v1/specifications', {
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
            "id": "679e8caa72d06732223ab68b",
            "name": "Brand",
            "slug": "brand",
            "description": null
        },
        {
            "id": "679e8caa72d06732223ab68c",
            "name": "Model",
            "slug": "model",
            "description": null
        },
        {
            "id": "679e8caa72d06732223ab68d",
            "name": "Color",
            "slug": "color",
            "description": null
        },
        {
            "id": "679e8caa72d06732223ab68e",
            "name": "Weight",
            "slug": "weight",
            "description": null
        }
    ],
    "message": "All specifications",
    "status": true
}
```

## 🔗 Next Steps
- [Product API](./product/README.md)
