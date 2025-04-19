---
title: Errors
---

The ShopSynch API follows RESTful principles and uses conventional HTTP response codes to indicate the success or failure of requests.

## **HTTP Codes**

### **200 - OK**
The request was successful, and the intended action was executed correctly. This applies to retrieving products, processing orders, and updating customer details.

### **201 - Created**
A new resource has been successfully created. This is typically returned when a new order, product, or customer profile is added to the system.

### **400 - Bad Request**
The request was invalid due to incorrect parameters, missing required fields, or improperly formatted data. This may occur when attempting to create an order without specifying necessary details.

### **401 - Unauthorized**
Authentication failed or was not provided. This happens when an invalid API key or JWT token is passed in the `Authorization` header or when a request is made without proper authentication.

### **422 - Unprocessable Entity**
Validation failed. This happens when you submit data that does not pass the required checks.

### **404 - Not Found**
The requested resource does not exist. This may occur when trying to access a product, order, or customer that has been deleted or never existed.

### **5xx - Server Errors**
An unexpected error occurred on the server, preventing the request from being processed. If this happens, please report it immediately, as it may indicate a system issue.

##  Handling Errors
Ensure that your application properly handles errors by checking response status codes and implementing retry logic where appropriate. For authentication failures, verify that the API key or JWT token is valid and included in the request headers.

##  Next Steps
- Learn more about [Authentication](authentication.md)
<!-- - Explore available [API Endpoints](api-endpoints/README.md) -->
