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

// set up routes
const browse = require("./routes/browse");
app.use("/browse", browse);

const edit = require("./routes/edit");
app.use("/edit", edit);

const add = require("./routes/add");
app.use("/add", add);

app.use("/public", express.static("public"));

// base route
app.get("/", (req, res) => {
  res.render("index");
});

// start the server
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}...`);
});
