---
title: Upload Single File
---

# Upload Single File

Use this endpoint to upload a single file with type-specific validation rules. It currently supports images (JPEG, PNG, GIF, WEBP up to 1MB) and compliance documents (PDF up to 3MB).

## Endpoint
**POST** `/v1/files/upload`

## Authentication
- Requires merchant authentication: `Authorization: Bearer JWT_TOKEN`.
- Requires `X-MerchantApiKey: MERCHANT_API_KEY`.

## Headers
```json
{
  "Authorization": "Bearer JWT_TOKEN",
  "X-MerchantApiKey": "MERCHANT_API_KEY",
  "Content-Type": "multipart/form-data"
}
```

## Form data parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `fileType` | string | Yes | The file category: `image` (max 1MB) or `pdf` (max 3MB). |
| `file` | file (binary) | Yes | The multipart file payload. |

## Responses

### 200 OK
```json
{
  "status": true,
  "message": "File uploaded successfully.",
  "data": {
    "id": "file_abc123xyz",
    "name": "business-registration.pdf",
    "url": "https://res.cloudinary.com/ibreathcode/image/upload/v1/compliance/documents/abc123xyz.pdf",
    "type": "application/pdf"
  }
}
```

### 400 Bad Request
```json
{
  "status": false,
  "message": "Selected file exceeds the maximum file size limit of 3MB for pdf uploads."
}
```
