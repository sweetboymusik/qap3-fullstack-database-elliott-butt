const express = require("express");
const router = express.Router();
const { getAllItems, getItemsByCategory } = require("../services/items.dal");
const { getAllCategories } = require("../services/categories.dal");

// /browse
router.get("/", async (req, res) => {
  try {
    const categories = await getAllCategories();
    if (categories.length === 0) res.render("no categories");
    res.render("browse", { categories });
  } catch (error) {
    // render error page
    console.log(error);
    res.render("503");
  }
});

router.get("/all", async (req, res) => {
  try {
    let items = await getAllItems(req.params.category);
    if (items.length === 0) res.render("no items");
    else res.render("items", { items });
  } catch {
    res.render("503");
  }
});

router.get("/:category", async (req, res) => {
  try {
    let items = await getItemsByCategory(req.params.category);
    if (items.length === 0) res.render("no items");
    else res.render("items", { items });
  } catch {
    res.render("503");
  }
});

module.exports = router;
