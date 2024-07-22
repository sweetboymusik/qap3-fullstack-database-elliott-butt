// import express and set up router
const express = require("express");
const router = express.Router();

// import DAL functions
const {
  getItemByName,
  getItemById,
  patchItem,
  deleteItem,
} = require("../services/items.dal");

// base route (/edit)
router.get("/", async (req, res) => {
  try {
    res.render("edit", { message: "" });
  } catch (error) {
    res.render("503");
  }
});

router.post("/name", async (req, res) => {
  try {
    const item = await getItemByName(req.body.item_name);

    if (item.length > 0) {
      res.redirect(`/edit/name/${item[0].item_name}`);
    } else {
      res.render("edit", { message: "No item with that name found." });
    }
  } catch (error) {}
});

router.post("/id", async (req, res) => {
  try {
    const item = await getItemById(req.body.item_id);
    if (item.length > 0) {
      res.redirect(`/edit/id/${item[0].item_id}`);
    } else {
      res.render("edit", { message: "No item with that ID found." });
    }
  } catch (error) {}
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
    res.render("edititem", { item: item[0], message: "" });
  } catch (error) {
    res.render("503");
  }
});

// put item
router.put("/name/:name", async (req, res) => {
  try {
    await patchItem(req.body);
    res.render("updated");
  } catch (error) {}
});

// patch item
router.patch("/name/:name", async (req, res) => {
  try {
    await patchItem(req.body);
    res.render("updated");
  } catch (error) {}
});

// delete item
router.delete("/name/:name", async (req, res) => {
  try {
    await deleteItem(req.params.name);
    res.render("deleted");
  } catch (error) {}
});

// delete item

module.exports = router;
