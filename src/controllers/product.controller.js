/**
 * @file product.controller.js
 * @description Handles Product CRUD operations
 */

import asyncHandler from "../middlewares/async-handler.js";
import prisma from "../prisma/client.js";

/**
 * @desc Fetch all products
 */
export const getProducts = asyncHandler(async (req, res) => {
  const data = await prisma.product.findMany({});
  res.status(200).json(data);
});

/**
 * @desc Create new product
 */
export const createProduct = asyncHandler(async (req, res) => {
  const data = await prisma.product.create({ data: req.body });
  res.status(201).json(data);
});

/**
 * @desc Update product by ID
 */
export const updateProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const data = await prisma.product.update({
    where: { id },
    data: req.body,
  });
  res.status(200).json(data);
});

/**
 * @desc Delete product by ID
 */
export const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await prisma.product.delete({ where: { id } });
  res.status(200).json({ message: "Product deleted" });
});
