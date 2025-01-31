import {
  getTransactions,
  getTransaction,
  postTransaction,
  putTransaction,
  deleteTransaction,
} from "../controller/Transaction.controller.js";

import express from "express";
const router = express.Router();

// Get All Transactions
router.get("/api/transactions", getTransactions);

// Get a Transaction
router.get("/api/transactions/:id", getTransaction);

// Create a Transaction
router.post("/api/transactions", postTransaction);

// Update a Transaction
router.put("/api/transactions/:id", putTransaction);

// Delete a Transaction
router.delete("/api/transactions/:id", deleteTransaction);

export default router;
