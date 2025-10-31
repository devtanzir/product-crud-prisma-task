/**
 * @file brand.controller.js
 * @description Handles Brand CRUD operations
 */

import prisma from "../prisma/client.js";
import asyncHandler from "../middlewares/async-handler.js";

export const getBrands = asyncHandler(async (req, res) => {
  const data = await prisma.brand.findMany({});
  res.status(200).json(data);
});

export const createBrand = asyncHandler(async (req, res) => {
  const data = await prisma.brand.create({ data: req.body });
  res.status(201).json(data);
});

export const updateBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const data = await prisma.brand.update({ where: { id }, data: req.body });
  res.status(200).json(data);
});

export const deleteBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await prisma.brand.delete({ where: { id } });
  res.status(200).json({ message: "Brand deleted" });
});
