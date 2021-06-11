//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
// const _ = require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/home", (req, res) => {
  res.render("home");
});

app.get("/resources", (req, res) => {
  res.render("resources");
});

app.get("/discuss", (req, res) => {
  res.render("discuss");
});


app.listen(3000, function() {
    console.log("Server started on port 3000");
});
  