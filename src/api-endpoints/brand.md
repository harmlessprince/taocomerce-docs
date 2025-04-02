---
title: Fetch Brands
---

## 📌 Description
The **brands API** provides a list of available product brands that can be used to categorize and filter products effectively.

## 🔗 Endpoint
**GET** `/v1/brands`

## 🛠️ Required Headers
No authentication is required for this request.

## 📡 Example API Call (Fetch or Axios)
```javascript
fetch('https://api.shopsynch.com/v1/brands', {
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
            "id": "679e8cd01a0127666618fdf6",
            "name": "Hisense",
            "logo": null,
            "slug": "hisense"
        },
        {
            "id": "679e8cd01a0127666618fdf7",
            "name": "LG",
            "logo": null,
            "slug": "lg"
        },
        {
            "id": "679e8cd01a0127666618fdf8",
            "name": "Maxi",
            "logo": null,
            "slug": "maxi"
        },
    ]
}
```

## 🔗 Next Steps
- [Fetch Colors](./color.md)
- [Fetch Countries ](./country.md)
