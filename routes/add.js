// import/configure express
const express = require("express");
const router = express.Router();

// import needed functions from DAL
const { addItem } = require("../services/items.dal");

// add route (/add)
router.get("/", async (req, res) => {
  try {
    res.render("add", { message: "" });
  } catch (error) {
    res.render("503");
  }
});

// add item to database
router.post("/", async (req, res) => {
  try {
    await addItem(req.body);
    res.render("add", { message: "Item added successfully!" });
  } catch (error) {
    res.render("503");
  }
});

module.exports = router;
