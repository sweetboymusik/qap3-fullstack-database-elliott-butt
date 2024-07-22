// import/configure express
const express = require("express");
const router = express.Router();

// import needed functions from DAL
const { getAllItems, getItemsByCategory } = require("../services/items.dal");
const {
  getAllCategories,
  getCategoryByName,
} = require("../services/categories.dal");

// browse route (/browse)
router.get("/", async (req, res) => {
  try {
    const categories = await getAllCategories();
    res.render("browse", { categories });
  } catch (error) {
    res.render("503");
  }
});

// all category (/browse/all)
router.get("/all", async (req, res) => {
  try {
    let items = await getAllItems(req.params.category);
    res.render("items", { items, category: "All" });
  } catch {
    res.render("503");
  }
});

// specific categories (/browse/:category)
router.get("/:category", async (req, res) => {
  try {
    let category = await getCategoryByName(req.params.category);
    let items = await getItemsByCategory(category[0].id);
    res.render("items", { items, category: category[0].name });
  } catch {
    res.render("503");
  }
});

module.exports = router;
