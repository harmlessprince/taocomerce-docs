---
title: Upload Single Image
---

# Upload Single Image

## 📌 Description
The **Upload Single Image API** allows you to upload a single image file.

## 🔗 Endpoint
**GET** `/v1/files/upload/single/image`


## 🛠️ Required Headers
```json
{
  "Authorization": "Bearer JWT_TOKEN",
  "X-MerchantId": "YOUR_MERCHANT_ID",
  "Content-Type": "application/json"
}
```

## 📡 Example API Call (Fetch or Axios)
```javascript
var formdata = new FormData();
formdata.append("file", fileInput.files[0], "WhatsApp Image 2025-02-13 at 13.23.32.jpeg");

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

fetch("{{url}}/v1/files/upload/single/image", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

## 📤 Sample 200 Response (Success)
```json
{
    "data": {
        "name": "WhatsApp Image 2025-02-13 at 13.23.32.jpeg",
        "url": "https://res.cloudinary.com/ibreathcode/image/upload/v1/product/images/hzafjkvoeq5iiltgqic5",
        "type": "image/jpeg"
    },
    "message": "File uploaded successfully",
    "status": true
}
```

## 🔗 Next Steps
- Learn to [Upload Multiple Images](./upload-multiple-images.md)
