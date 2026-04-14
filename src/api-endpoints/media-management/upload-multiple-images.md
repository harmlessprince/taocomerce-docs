---
title: Upload Multiple Images
---

# Upload Multiple Images

##  Description
The **Upload Multiple Images API** allows you to upload multiple image files in a single request.

##  Endpoint
**POST** `/v1/files/upload/multiple/images`


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
formdata.append("files", fileInput.files[0], "product-image-1.png");
formdata.append("files", fileInput.files[1], "product-image-2.png");

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
            "id": "file_abc123xyz",
            "name": "product-image-1.png",
            "url": "https://res.cloudinary.com/ibreathcode/image/upload/v1/product/images/fvnbwmf3pk2z5wfzjipu",
            "type": "image/png"
        },
        {
            "id": "file_def456uvw",
            "name": "product-image-2.png",
            "url": "https://res.cloudinary.com/ibreathcode/image/upload/v1/product/images/kqrtylmn8ab3x2yzcwop",
            "type": "image/png"
        }
    ],
    "message": "Files uploaded successfully",
    "status": true
}
```

> [!IMPORTANT]
> Save the `id` from each file object in the response. These IDs are required when creating or updating V2 products — pass them as the `image`, `thumbnail`, or `imageList` field values instead of URLs.

##  Next Steps
- Learn to [Upload a Single Image](./upload-single-image.md)
