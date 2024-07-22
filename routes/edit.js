// import express and set up router
const express = require("express");
const router = express.Router();

// import DAL functions
const {
  getItemByName,
  getItemById,
  patchItem,
} = require("../services/items.dal");

// base route (/edit)
router.get("/", async (req, res) => {
  try {
    res.render("edit");
  } catch (error) {
    res.render("503");
  }
});

router.post("/", async (req, res) => {
  // get inputted id or name and go to that /page
});

// edit item by name (/name/:name)
router.get("/name/:name", async (req, res) => {
  try {
    const item = await getItemByName(req.params.name);
    res.render("edititem", { item: item[0], message: "" });
  } catch (error) {
    res.render("503");
  }
});

// edit item by id (/id/:id)
router.get("/id/:id", async (req, res) => {
  try {
    const item = await getItemById(req.params.id);
    res.status = 200;
    res.render("edititem", { item: item[0], message: "" });
  } catch (error) {
    res.render("503");
  }
});

// patch item
router.patch("/name/:name", async (req, res) => {
  try {
    await patchItem(req.body);
    res.render("success");
  } catch (error) {}
});

// delete item

module.exports = router;
