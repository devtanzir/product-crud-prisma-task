import express from "express";
import dotenv from "dotenv";
import "colors";
import { PrismaClient } from "@prisma/client";

// env variables
dotenv.config();
const PORT = process.env.PORT || 6060;

//init
const app = express();
const prisma = new PrismaClient();

// support

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routing

//! Product routing
app.get("/products", async (req, res) => {
  const data = await prisma.product.findMany({
    include: {
      category: true,
      brand: true,
    },
  });

  res.status(200).json(data);
});
app.post("/products", async (req, res) => {
  const data = await prisma.product.create({
    data: req.body,
  });
  res.status(201).json(data);
});
app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  await prisma.product.delete({
    where: { id },
  });
  res.status(200).json({ message: "product deleted" });
});
app.patch("/products/:id", async (req, res) => {
  const { id } = req.params;
  const data = await prisma.product.update({
    where: { id },
    data: req.body,
  });
  res.status(200).json(data);
});

//! Category routing
app.get("/categories", async (req, res) => {
  const data = await prisma.category.findMany({
    include: {
      products: true,
    },
  });

  res.status(200).json(data);
});
app.post("/categories", async (req, res) => {
  const data = await prisma.category.create({
    data: req.body,
  });
  res.status(201).json(data);
});
app.delete("/categories/:id", async (req, res) => {
  const { id } = req.params;
  await prisma.category.delete({
    where: { id },
  });
  res.status(200).json({ message: "category deleted" });
});
app.patch("/categories/:id", async (req, res) => {
  const { id } = req.params;
  const data = await prisma.category.update({
    where: { id },
    data: req.body,
  });
  res.status(200).json(data);
});

//! Brands routing
app.get("/brands", async (req, res) => {
  const data = await prisma.brand.findMany({
    include: {
      products: true,
    },
  });

  res.status(200).json(data);
});
app.post("/brands", async (req, res) => {
  const data = await prisma.brand.create({
    data: req.body,
  });
  res.status(201).json(data);
});
app.delete("/brands/:id", async (req, res) => {
  const { id } = req.params;
  await prisma.brand.delete({
    where: { id },
  });
  res.status(200).json({ message: "brand deleted" });
});
app.patch("/brands/:id", async (req, res) => {
  const { id } = req.params;
  const data = await prisma.brand.update({
    where: { id },
    data: req.body,
  });
  res.status(200).json(data);
});
//listen
app.listen(PORT, () => {
  console.log(
    `➽ SERVER ✘ RUNNING ✘ PORT ✘ ${PORT} 去 http://localhost:${PORT}`.bgYellow
  );
});
