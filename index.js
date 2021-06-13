//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
// const _ = require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


var posts = [{title:"First Post",body:"There are many variations of passages of Lorem Ipsum available, but the. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."},{title:"Second Post",body:"There are many variations of passages of Lorem Ipsum available, but the. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."},{title:"Third Post",body:"There are many variations of passages of Lorem Ipsum available, but the. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."}]



app.get("/", (req, res) => {
  res.render("home");
});

app.get("/home", (req, res) => {
  res.render("home");
});

app.get("/resources", (req, res) => {
  res.render("resources");
});

app.get("/discuss",function(req,res){
  res.render("discuss",{posts})
});

app.get("/discuss/:newpage", function (req, res) {
  posts.forEach(function (post) {
    if (post.title == req.params.newpage) {
      var title = post.title;
      var body = post.body;
      res.render("home",{title,body});
      console.log("Match found");
      return;
    }
  });
});


app.listen(3000, function() {
    console.log("Server started on port 3000");
});
  