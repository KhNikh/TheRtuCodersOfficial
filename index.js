//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
// const _ = require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

var posts = [{title:"First exp Post",body:"There are many variations of passages of Lorem Ipsum available, but the. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."},{title:"second exp Post",body:"There are many variations of passages of Lorem Ipsum available, but the. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."},{title:"third exp Post",body:"There are many variations of passages of Lorem Ipsum available, but the. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."},{title:"Third Post",body:"There are many variations of passages of Lorem Ipsum available, but the. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."}]
var carrPosts = [{title:"First Carrer Post",body:"There are many variations of passages of Lorem Ipsum available, but the. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."},{title:"Second Carrer Post",body:"There are many variations of passages of Lorem Ipsum available, but the. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."},{title:"Second Post",body:"There are many variations of passages of Lorem Ipsum available, but the. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."},{title:"Third Post",body:"There are many variations of passages of Lorem Ipsum available, but the. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."}]
var discussionPosts = [{title:"First Discussion Post",body:"There are many variations of passages of Lorem Ipsum available, but the. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."},{title:"Second discussion Post",body:"There are many variations of passages of Lorem Ipsum available, but the. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."},{title:"Second Post",body:"There are many variations of passages of Lorem Ipsum available, but the. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."},{title:"Third Post",body:"There are many variations of passages of Lorem Ipsum available, but the. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."}]

var userObj = {
  fullName:"",
  rating:0,
  rank:"",
  image:"",
  university:"",
  email:""
}


app.get("/", (req, res) => {
  res.render("home");
});

app.get("/home", (req, res) => {
  res.render("home");
});

app.get("/resources", (req, res) => {
  res.render("resources");
});

app.get("/roadmap", (req, res) => {
  res.render("roadmap");
});

app.get("/discuss",function(req,res){
  res.render("discuss",{posts,carrPosts,discussionPosts})
});

app.get("/leaderboard", (req, res) => {
  res.render("leaderboard");
});



app.get("/compose",function(req,res){
  res.render("compose");
})
app.post("/compose",function(req,res){
  const post = {
    title: req.body.postTitle,
    body: req.body.postBody
  };

  posts.push(post);

  res.render("discuss",{posts,carrPosts,discussionPosts});

})

app.get("/discuss/:postName", function (req, res) {
  const requestedTitle = _.lowerCase(req.params.postName);
  posts.forEach(function (post) {
    if (_.lowerCase(post.title) === requestedTitle) {
      res.render("post",{title:post.title,content:post.body});
      console.log("Match found");
      return;
    }
  });
});

app.get("/user/:postId", function(req, res){

  const userName = req.params.postId;
  const url = "https://codeforces.com/api/user.info?handles="+userName;
  https.get(url,(response)=>{
      response.on("data",(data)=>{
          const user = JSON.parse(data)
          // console.log(user.result);
          // const userDetail = user.result[0]
          userObj.fullName=  "asdf" // userDetail.firstName+" "+userDetail.lastName;
          userObj.rating= 0    //userDetail.rating;
          userObj.rank=0     //  userDetail.rank;
          userObj.image=null    //userDetail.titlePhoto;
          userObj.university= "Asdf"  //userDetail.organization;
          userObj.email= "asdf"        //userDetail.email;
      })
  })
  res.render("profile",{name:userObj})
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});
  