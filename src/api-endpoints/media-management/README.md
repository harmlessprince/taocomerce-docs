---
title: Media Management API
---

# Media Management API

##  Description
The **Media Management API** provides endpoints for uploading and managing media files, particularly images. This API enables users to upload single or multiple images for use in products, categories, and other platform features. All image uploads are securely handled and stored for later retrieval.

### **Key Features:**
- **Single Image Upload:** Upload individual images with support for various image formats.
- **Batch Image Upload:** Upload multiple images in a single request for improved efficiency.
- **Secure Storage:** All images are securely stored and associated with your merchant account.
- **Multipart Form Data:** Uses standard multipart/form-data encoding for file uploads.

##  Authentication Requirements
- **Authorization**: Must provide a valid JWT token in the `Authorization` header.
- **Merchant API Key**: The `X-MerchantApiKey` header is **mandatory** for all requests.
- **Content-Type**: Must set `Content-Type` header to `multipart/form-data` for file uploads.

##  Available Endpoints
- [Upload Single Image](./upload-single-image.md) - Upload a single image file
- [Upload Multiple Images](./upload-multiple-images.md) - Upload multiple image files in one request