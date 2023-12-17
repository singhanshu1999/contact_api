const express = require("express");
const router = express.Router();
const {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");

router.get("/", getContacts).post("/", createContact);

//router.post("/", createContact);

router
  .get("/:id", getContact)
  .put("/:id", updateContact)
  .delete("/:id", deleteContact);

//router.put("/:id", updateContact);

//router.delete("/:id", deleteContact);

module.exports = router;
