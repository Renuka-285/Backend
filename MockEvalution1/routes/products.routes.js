import express from "express";
import { readDB, writeDB } from "../utils/fileHandler.js";

const router = express.Router();

router.post("/", (req, res) => {
  const { products } = readDB();
  const newProduct = {
    id: products.length + 1,
    ...req.body
  };
  products.push(newProduct);
  writeDB({ products, orders: readDB().orders });
  res.status(201).json({ message: "Product added", product: newProduct });
});
router.get("/", (req, res) => {
  const { products } = readDB();
  res.json(products);
});

export default router;