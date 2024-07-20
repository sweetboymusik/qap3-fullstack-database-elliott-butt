// import libraries
const express = require("express");
const methodOverride = require("method-override");

// set up port number
const PORT = 3000;

// configure express
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(PORT, () => {
  console.log(`Simple app running on port ${PORT}.`);
});
