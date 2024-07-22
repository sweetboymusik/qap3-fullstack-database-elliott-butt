const express = require("express");
const router = express.Router();
const { addItem } = require("../services/items.dal");

// /browse
router.get("/", async (req, res) => {
  try {
    res.render("add", { message: "" });
  } catch (error) {
    res.render("503");
  }
});

router.post("/", async (req, res) => {
  try {
    await addItem(req.body);
    res.render("add", { message: "Item added successfully!" });
  } catch (error) {
    res.render("503");
  }
});

module.exports = router;
