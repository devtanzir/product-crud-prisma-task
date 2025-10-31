# Prisma Product-Category-Brand API

A **production-ready REST API** built with **Express.js** and **Prisma ORM** (MongoDB) to manage **Products, Categories, and Brands**.  
Supports **CRUD operations** with proper **modular structure**, **async error handling**, and **JSDoc documentation**.



## Project Structure

```text
project-root/
├─ src/
│ ├─ prisma/
│ │ └─ client.js # Prisma client instance
│ ├─ controllers/
│ │ ├─ product.controller.js
│ │ ├─ category.controller.js
│ │ └─ brand.controller.js
│ ├─ routes/
│ │ ├─ product.routes.js
│ │ ├─ category.routes.js
│ │ └─ brand.routes.js
│ ├─ middlewares/
│ │ ├─ asyncHandler.js
│ │ └─ errorHandler.js
│ └─ server.js
├─ prisma/
│ └─ schema.prisma
├─ .env
└─ package.json
```

## Features

- Modular Express.js API (routes, controllers, middleware)
- MongoDB-compatible Prisma ORM
- Product ↔ Category Many-to-Many relationship
- Brand ↔ Product One-to-Many relationship
- AsyncHandler & Global ErrorHandler
- Fully documented with JSDoc
- CRUD operations for **Products, Categories, and Brands**


## Prerequisites

- Node.js ≥ 18
- pnpm / npm / yarn
- MongoDB Atlas or local MongoDB instance
- dotenv

## Setup & Installation

1. Clone the repository:

```bash
git clone <repo-url>
cd <project-root>
```

### Install dependencies

```bash
pnpm install
# or
npm install

```
### Create .env file at root

```env
PORT=YOUR PORT
DATABASE_URL=YOUR DATABASE URL

```

### Generate Prisma client
```bash
pnpm prisma:generate
```

### Run development server
```bash
pnpm dev
```

### Run production server
```bash
pnpm start
```

Server will run at: http://localhost:6060

## API Endpoints

### Products

| Method | Route         | Description            |
| ------ | ------------- | ---------------------- |
| GET    | /products     | Get all products       |
| POST   | /products     | Create a new product   |
| PATCH  | /products/:id | Update a product by ID |
| DELETE | /products/:id | Delete a product by ID |

### Categories

| Method | Route           | Description             |
| ------ | --------------- | ----------------------- |
| GET    | /categories     | Get all categories      |
| POST   | /categories     | Create a new category   |
| PATCH  | /categories/:id | Update a category by ID |
| DELETE | /categories/:id | Delete a category by ID |

### Brands

| Method | Route       | Description          |
| ------ | ----------- | -------------------- |
| GET    | /brands     | Get all brands       |
| POST   | /brands     | Create a new brand   |
| PATCH  | /brands/:id | Update a brand by ID |
| DELETE | /brands/:id | Delete a brand by ID |

### Example Product JSON

```json
{
  "name": "iPhone 15 Pro",
  "price": 1199,
  "categoryIds": ["64f4f0c9abcd123456789001", "64f4f0c9abcd123456789002"],
  "brandId": "64f4f0c9abcd123456789100",
  "status": true
}

```

## Prisma Schema Highlights

- Product has multiple Category via categoryIds array.

- Brand has multiple Product via one-to-many relation.

- MongoDB-compatible ObjectId used for all IDs.

## Notes

- Make sure MongoDB connection string is correct in .env

- All API routes return JSON responses

- Async errors are automatically handled by asyncHandler and errorHandler

- Server logs colored output using colors library

## Deployment

- Set NODE_ENV=production in environment

Run production server:

```bash
pnpm start
```
Use a process manager like PM2:

```bash
pm2 start src/server.js --name "product-api"
```

## Author

Tanzir Ibne Ali

### References

- Express.js Documentation

- Prisma ORM Docs

- MongoDB Atlas