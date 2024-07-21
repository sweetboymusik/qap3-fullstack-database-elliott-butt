const express = require("express");
const router = express.Router();

// /edit
router.get("/", async (req, res) => {
  try {
    res.render("edit");
  } catch (error) {
    res.render("503");
  }
});

module.exports = router;
