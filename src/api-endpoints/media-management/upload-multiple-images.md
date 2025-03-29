---
title: Upload Multiple Images
---

# Upload Single Image

## 📌 Description
The **Upload Single Image API** allows you to upload a single image file.

## 🔗 Endpoint
**GET** `/v1/files/upload/multiple/images`


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
formdata.append("files", fileInput.files[0], "createbudget.png");
formdata.append("files", fileInput.files[0], "customcategory.png");

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

fetch("{{url}}/v1/files/upload/multiple/images", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

## 📤 Sample 200 Response (Success)
```json
{
    "data": [
        {
            "name": "WhatsApp Image 2025-02-13 at 13.23.32.jpeg",
            "url": "https://res.cloudinary.com/ibreathcode/image/upload/v1/product/images/fvnbwmf3pk2z5wfzjipu",
            "type": "image/jpeg"
        }
    ],
    "message": "File uploaded successfully",
    "status": true
}
```

## 🔗 Next Steps
- Learn to [Upload Multiple Images](./upload-single-image.md)
