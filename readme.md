# Product Management Backend API

## Overview
This is a backend API for managing products and categories. It is built using Node.js, Express, Sequelize, and MySQL. The API allows users to perform CRUD operations on both products and categories.

## Prerequisites
- Node.js (v14 or later)
- MySQL (v5.7 or later)
- Postman (for testing the API)

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sarveshmishra561999/product_categories_management.git
   cd product_management_app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create the MySQL database**
   Ensure that MySQL is running and create the database using the following script:
   ```sql
   CREATE DATABASE IF NOT EXISTS productManagementDb;
   ```

4. **Set up environment variables**
   Create a `.env` file in the root directory and add the following:
   ```env
   DB_NAME=productManagementDb
   DB_USER=root
   DB_PASSWORD=nciportal
   DB_HOST=localhost
   DB_DIALECT=mysql
   ```

5. **Run the server**
   ```bash
   npm start
   ```
   The server will start on `http://localhost:3000`.

## API Endpoints

### Categories

#### 1. Get All Categories
- **URL:** `/categories`
- **Method:** `GET`

#### 2. Get Category by ID
- **URL:** `/categories/:id`
- **Method:** `GET`

#### 3. Create a Category
- **URL:** `/categories`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "name": "Category Name"
  }
  ```

#### 4. Update a Category
- **URL:** `/categories/:id`
- **Method:** `PUT`
- **Body:**
  ```json
  {
    "name": "Updated Category Name"
  }
  ```

#### 5. Delete a Category
- **URL:** `/categories/:id`
- **Method:** `DELETE`

### Products

#### 1. Get All Products
- **URL:** `/products`
- **Method:** `GET`

#### 2. Get Product by ID
- **URL:** `/products/:id`
- **Method:** `GET`

#### 3. Create a Product
- **URL:** `/products`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "name": "Product Name",
    "categoryId": "Category ID"
  }
  ```

#### 4. Update a Product
- **URL:** `/products/:id`
- **Method:** `PUT`
- **Body:**
  ```json
  {
    "name": "Updated Product Name",
    "categoryId": "Updated Category ID"
  }
  ```

#### 5. Delete a Product
- **URL:** `/products/:id`
- **Method:** `DELETE`

## Testing with Postman

1. **Open Postman** and create a new request.
2. **Select the HTTP method** (GET, POST, PUT, DELETE) as required by the endpoint.
3. **Enter the API URL**, replacing parameters (e.g., `:id`) with actual values.
4. **Add request headers** like `Content-Type: application/json` when sending data.
5. **Enter request body** (for POST and PUT methods) in JSON format.
6. **Send the request** and observe the response.

## Project Structure

```
product_management_app/
├── models/
│   ├── category.js
│   └── product.js
├── routes/
│   ├── categoryRoutes.js
│   └── productRoutes.js
├── app.js
├── config/
│   └── database.js
├── package.json
└── .env
```

## Sequelize Models

### Category Model
- **Fields:**
  - `id`: Integer (Primary Key)
  - `name`: String
  - `createdAt`: Date
  - `updatedAt`: Date

### Product Model
- **Fields:**
  - `id`: Integer (Primary Key)
  - `name`: String
  - `categoryId`: Integer (Foreign Key)
  - `createdAt`: Date
  - `updatedAt`: Date

## Acknowledgements
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [MySQL](https://www.mysql.com/)
- [Postman](https://www.postman.com/)

