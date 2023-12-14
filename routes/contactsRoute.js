const express = require("express");
const router = express.Router();
const { getContact } = require("../controllers/contactController");

router.get("/", getContact);

router.post("/", async (req, res) => {
  res.json({ message: "create new contacts" });
});

router.get("/:id", async (req, res) => {
  res.json({ message: "get contacts by id" });
});

router.put("/:id", async (req, res) => {
  res.json({ message: "update contacts by id" });
});

router.delete("/:id", async (req, res) => {
  res.json({ message: "delete contacts by id" });
});

module.exports = router;
