/**
 * @file server.js
 * @description Main server entry point for Express + Prisma
 */

import express from "express";
import dotenv from "dotenv";
import "colors";
import productRoutes from "./routes/product.routes.js";
import categoryRoutes from "./routes/category.routes.js";
import brandRoutes from "./routes/brand.routes.js";
import errorHandler from "./middlewares/error-handler.js";

dotenv.config();
const PORT = process.env.PORT || 6060;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Mount routes
app.use("/products", productRoutes);
app.use("/categories", categoryRoutes);
app.use("/brands", brandRoutes);

// Global error handler
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`SERVER || RUNNING || ON || PORT || ${PORT}`.bgYellow.black);
});
