const express = require("express");
const router = express.Router();
const { getAllItems, getItemsByCategory } = require("../services/items.dal");
const {
  getAllCategories,
  getCategoryByName,
} = require("../services/categories.dal");

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
    else res.render("items", { items, category: "All" });
  } catch {
    res.render("503");
  }
});

router.get("/:category", async (req, res) => {
  try {
    let category = await getCategoryByName(req.params.category);
    let items = await getItemsByCategory(category[0].id);

    if (items.length === 0) res.render("no items");
    else res.render("items", { items, category: category[0].name });
  } catch {
    res.render("503");
  }
});

module.exports = router;
