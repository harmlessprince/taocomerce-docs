---
title: Upload Single Image
---

# Upload Single Image

##  Description
The **Upload Single Image API** allows you to upload a single image file.

##  Endpoint
**POST** `/v1/files/upload/single/image`


##  Required Headers
```json
{
  "Authorization": "Bearer JWT_TOKEN",
  "X-MerchantApiKey": "MERCHANT_API_KEY",
  "Content-Type": "multipart/form-data"
}
```

##  Example API Call (Fetch or Axios)
```javascript
var formdata = new FormData();
formdata.append("file", fileInput.files[0], "product-image.jpeg");

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
        "id": "file_abc123xyz",
        "name": "product-image.jpeg",
        "url": "https://res.cloudinary.com/ibreathcode/image/upload/v1/product/images/hzafjkvoeq5iiltgqic5",
        "type": "image/jpeg"
    },
    "message": "File uploaded successfully",
    "status": true
}
```

> [!IMPORTANT]
> Save the `id` from this response. It is required when creating or updating V2 products — pass it as the `image`, `thumbnail`, or `imageList` field value instead of a URL.

##  Next Steps
- Learn to [Upload Multiple Images](./upload-multiple-images.md)
