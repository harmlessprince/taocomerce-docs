---
title: Add Product
---

# Add Product

##  Description
The **Add Product** API allows businesses to add new products to their eCommerce platform. During the product creation process, you can specify product details such as name, description, price, color, specifications, variations, and more. The API also allows you to manage different colors and variations for your products.

##  Endpoint
**POST** `/v1/products`

##  Required Headers
```json
{
  "Authorization": "Bearer JWT_TOKEN",
  "X-MerchantApiKey": "MERCHANT_API_KEY",
  "Content-Type": "application/json"
}
```

## 📥 Request Body
Here is a breakdown of each field in the `ProductRequest` DTO:

### ProductRequest DTO

| Field             | Type      | Required | Description                                                       |
|-------------------|-----------|----------|-------------------------------------------------------------------|
| `name`            | string    | Yes      | The name of the product.                                          |
| `description`     | string    | Yes      | The product's detailed description (min 50 characters).           |
| `summary`         | string    | No       | A brief product summary (min 10, max 255 characters).             |
| `image`           | string    | Yes      | The main image URL for the product.                               |
| `thumbnail`       | string    | Yes      | The thumbnail image URL for the product.                          |
| `imageList`       | list      | No       | A list of additional image URLs for the product.                  |
| `features`        | list      | No      | A list of product features or specifications.                     |
| `price`           | double    | Yes      | The price of the product (must be greater than 1).                |
| `ramSize`         | string    | No       | The RAM size of the product (e.g., 4GB, 512MB, 12KB, 1TB).        |
| `storage`         | string    | No       | The storage capacity of the product.                              |
| `size`            | string    | No       | The size of the product (e.g., Large, Medium).                    |
| `sku`             | string    | No       | Stock Keeping Unit (SKU) identifier.                              |
| `quantityInStock` | integer   | Yes      | The quantity of the product available in stock.                   |
| `brandId`         | string    | No       | The brand ID for the product.                                     |
| `discount`        | double    | No       | Discount on the product (0-100%).                                 |
| `categoryId`      | string    | Yes      | The category ID the product belongs to.                           |
| `tenantId`        | string    | Yes      | Merchant API KEY for your business account.                              |
| `colorId`         | string    | No      | Color ID for the product. Available colors can be found [here](../specification.md). You can also specify a custom color using the `customColor` field. |
| `customColor`     | string    | No       | Custom color for the product (e.g., "Deep Red").                  |
| `specifications`  | list      | No      | List of product specifications. Each specification must have a key and value. [More Info](#productspecification-dto) |
| `variations`      | list      | Yes      | Variations of the product (e.g., color, size). [More Info](#productvariation-dto) |

### ProductSpecification DTO
Available specifications can be found [here](../specification.md).
<details>
  <summary>Product Specification</summary>
  <table border="1">
    <thead>
      <tr>
        <th>Field</th>
        <th>Type</th>
        <th>Required</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>key</code></td>
        <td>string</td>
        <td>Yes</td>
        <td>The specification key (e.g., "Battery Capacity").</td>
      </tr>
      <tr>
        <td><code>value</code></td>
        <td>string</td>
        <td>Yes</td>
        <td>The specification value (e.g., "4000mAh").</td>
      </tr>
    </tbody>
  </table>
</details>

### ProductVariation DTO
<details>
  <summary>Product Variation</summary>
  <table border="1">
    <thead>
      <tr>
        <th>Field</th>
        <th>Type</th>
        <th>Required</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>color</code></td>
        <td>string</td>
        <td>Yes</td>
        <td>The color of the variation (use color from available options or `customColor`).</td>
      </tr>
      <tr>
        <td><code>image</code></td>
        <td>string</td>
        <td>No</td>
        <td>Image URL for the color variant.</td>
      </tr>
      <tr>
        <td><code>priceDetails</code></td>
        <td>list</td>
        <td>Yes</td>
        <td>List of price details for this variation. [More Info](#productpricedetail-dto)</td>
      </tr>
    </tbody>
  </table>
</details>


### ProductPriceDetail DTO

<details>
  <summary>Product PriceDetail</summary>
  <table>
    <thead>
      <tr>
        <th>Field</th>
        <th>Type</th>
        <th>Required</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>price</code></td>
        <td>double</td>
        <td>Yes</td>
        <td>Price for this variation.</td>
      </tr>
      <tr>
        <td><code>newPrice</code></td>
        <td>double</td>
        <td>No</td>
        <td>Discounted price for this variation.</td>
      </tr>
      <tr>
        <td><code>ramSize</code></td>
        <td>string</td>
        <td>No</td>
        <td>RAM size for this variation.</td>
      </tr>
      <tr>
        <td><code>sku</code></td>
        <td>string</td>
        <td>Yes</td>
        <td>SKU for this variation.</td>
      </tr>
      <tr>
        <td><code>quantityInStock</code></td>
        <td>integer</td>
        <td>Yes</td>
        <td>Quantity in stock for this variation.</td>
      </tr>
      <tr>
        <td><code>discount</code></td>
        <td>double</td>
        <td>No</td>
        <td>Discount percentage for this variation.</td>
      </tr>
    </tbody>
  </table>
</details>


##  Available Colors and Brands
- To view available colors, visit the [Color API](https://api.shopsynch.com/v1/colors).
- To view available brands, visit the [Brand API](https://api.shopsynch.com/v1/brands).
- To view available Specifications, visit the [Brand API](https://api.shopsynch.com/v1/brands).
- You can use the `customColor` field to specify your own color if the color you desire isn't listed.

##  Example API Call (Fetch or Axios)
```javascript
fetch('https://api.yourdomain.com/v1/products', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer JWT_TOKEN',
    'X-MerchantApiKey': 'MERCHANT_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: "LG 45 Inch Signature OLed TV",
    description: "A high-end 45 inch OLED smart TV.",
    summary: "LG 45 inch 4K Smart TV",
    image: "https://example.com/images/lg-tv.jpg",
    thumbnail: "https://example.com/images/lg-tv-thumb.jpg",
    features: ["OLED", "4K", "Smart TV"],
    price: 20000.00,
    ramSize: "4GB",
    storage: "500GB",
    size: "Large",
    sku: "TV12345",
    quantityInStock: 10,
    brandId: "brand123",
    discount: 10.0,
    categoryId: "category123",
    colorId: "color123",
    customColor: "Deep Red",
    specifications: [{ key: "Screen Size", value: "45 inches" }],
    variations: [{
      color: "Red",
      image: "https://example.com/images/red-tv.jpg",
      priceDetails: [{
        price: 20000,
        newPrice: 18000,
        sku: "TV-RED123",
        quantityInStock: 5,
        discount: 10
      }]
    }]
  })
})
.then(response => response.json())
.then(data => console.log(data));
```

## 📥 Request Samples
Here are the sample requests for different product creation scenarios:

### 1. Creating a Simple Product
```json
{
  "name": "Smartphone",
  "description": "A high-end smartphone with great features.",
  "summary": "Smartphone 64GB",
  "image": "https://example.com/images/smartphone.jpg",
  "thumbnail": "https://example.com/images/smartphone-thumb.jpg",
  "price": 500.00,
  "ramSize": "4GB",
  "storage": "64GB",
  "size": "Medium",
  "sku": "SP12345",
  "quantityInStock": 50,
  "categoryId": "category123",
  "colorId": "color123",
  "customColor": "Black",
  "specifications": [
    {
      "key": "Battery Capacity",
      "value": "4000mAh"
    }
  ],
  "variations": []
}

```



### 2. Creating a Product with Specifications
```json
{
  "name": "Laptop",
  "description": "High-performance laptop for professionals.",
  "summary": "Laptop 16GB RAM",
  "image": "https://example.com/images/laptop.jpg",
  "thumbnail": "https://example.com/images/laptop-thumb.jpg",
  "price": 1200.00,
  "ramSize": "16GB",
  "storage": "1TB",
  "size": "Large",
  "sku": "LT12345",
  "quantityInStock": 30,
  "categoryId": "category123",
  "colorId": "color123",
  "customColor": "Silver",
  "specifications": [
    {
      "key": "Display",
      "value": "15.6 inches"
    },
    {
      "key": "Processor",
      "value": "Intel i7"
    }
  ],
  "variations": []
}

```



### 3. Creating a Product with Specifications and Variations
```json
{
  "name": "Smartwatch",
  "description": "A stylish smartwatch with fitness tracking features.",
  "summary": "Smartwatch 42mm",
  "image": "https://example.com/images/smartwatch.jpg",
  "thumbnail": "https://example.com/images/smartwatch-thumb.jpg",
  "price": 200.00,
  "ramSize": "1GB",
  "storage": "16GB",
  "size": "Small",
  "sku": "SW12345",
  "quantityInStock": 100,
  "categoryId": "category123",
  "colorId": "color123",
  "customColor": "Blue",
  "specifications": [
    {
      "key": "Water Resistance",
      "value": "50 meters"
    },
    {
      "key": "Battery Life",
      "value": "24 hours"
    }
  ],
  "variations": [
    {
      "color": "Black",
      "image": "https://example.com/images/smartwatch-black.jpg",
      "priceDetails": [
        {
          "price": 200.00,
          "newPrice": 180.00,
          "sku": "SW-BLK123",
          "quantityInStock": 50,
          "discount": 10
        }
      ]
    },
    {
      "color": "White",
      "image": "https://example.com/images/smartwatch-white.jpg",
      "priceDetails": [
        {
          "price": 200.00,
          "newPrice": 180.00,
          "sku": "SW-WHT123",
          "quantityInStock": 50,
          "discount": 10
        }
      ]
    }
  ]
}

```


### 4. Creating a Simple Product with Specifications and Variations
```json
{
  "name": "Wireless Headphones",
  "description": "Comfortable wireless headphones with noise cancellation.",
  "summary": "Wireless Headphones 40mm",
  "image": "https://example.com/images/headphones.jpg",
  "thumbnail": "https://example.com/images/headphones-thumb.jpg",
  "price": 150.00,
  "ramSize": "N/A",
  "storage": "N/A",
  "size": "One Size",
  "sku": "HP12345",
  "quantityInStock": 75,
  "categoryId": "category123",
  "colorId": "color123",
  "customColor": "Black",
  "specifications": [
    {
      "key": "Noise Cancellation",
      "value": "Active Noise Cancellation"
    },
    {
      "key": "Battery Life",
      "value": "20 hours"
    }
  ],
  "variations": [
    {
      "color": "Black",
      "image": "https://example.com/images/headphones-black.jpg",
      "priceDetails": [
        {
          "price": 150.00,
          "newPrice": 135.00,
          "sku": "HP-BLK123",
          "quantityInStock": 40,
          "discount": 10
        }
      ]
    },
    {
      "color": "White",
      "image": "https://example.com/images/headphones-white.jpg",
      "priceDetails": [
        {
          "price": 150.00,
          "newPrice": 135.00,
          "sku": "HP-WHT123",
          "quantityInStock": 35,
          "discount": 10
        }
      ]
    }
  ]
}

```
