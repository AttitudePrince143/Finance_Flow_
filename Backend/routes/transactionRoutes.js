const express = require("express");
const router = express.Router();
const Transaction = require("../models/Transaction");

// GET all transactions
router.get("/", async (req, res) => {
  const data = await Transaction.find().sort({ createdAt: -1 });
  res.json(data);
});

// ADD transaction
router.post("/", async (req, res) => {
  const newTransaction = await Transaction.create(req.body);
  res.json(newTransaction);
});

// DELETE transaction
router.delete("/:id", async (req, res) => {
  await Transaction.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
});

module.exports = router;