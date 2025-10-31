/**
 * @file category.controller.js
 * @description Handles Category CRUD operations
 */

import asyncHandler from "../middlewares/async-handler.js";
import prisma from "../prisma/client.js";

export const getCategories = asyncHandler(async (req, res) => {
  const data = await prisma.category.findMany({});
  res.status(200).json(data);
});

export const createCategory = asyncHandler(async (req, res) => {
  const data = await prisma.category.create({ data: req.body });
  res.status(201).json(data);
});

export const updateCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const data = await prisma.category.update({ where: { id }, data: req.body });
  res.status(200).json(data);
});

export const deleteCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await prisma.category.delete({ where: { id } });
  res.status(200).json({ message: "Category deleted" });
});
