const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const https = require("https");
const cors = require("cors");
const app = express();
mongoose
  .connect(
    "mongodb+srv://KhNikh:SHiC93QlW5i6uXlC@cluster0.ukmdz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => {
    console.log("connection successfully");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  reEnterPassword: String,
  mobile: Number,
  college: String,
});
const User = mongoose.model("User", UserSchema);

const PostsSchema = new mongoose.Schema({
  title: String,
  body: String,
});
const Post = mongoose.model("Post", PostsSchema);
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "Login Successfull", user: user });
      } else {
        res.send({ message: "Password didn't match" });
      }
    } else {
      res.send({ message: "User not registered" });
    }
  });
});

app.post("/register", function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ email: email }, (err, user) => {
    if (err) {
      console.log(err);
    } else {
      if (user) {
        if (user.password === password) {
          res.send({ message: "User already exist" });
        } else {
          res.send({ message: "email id already exist" });
        }
      } else {
        const user = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          reEnterpassword: req.body.reEnterPasswordpassword,
          mobile: req.body.mobile,
          college: req.body.college,
        });
        user.save(function (err, result) {
          if (!err) res.send({ message: "Registered Successfully" });
          else res.send({ message: err });
        });
      }
    }
  });
  // user.save(function (err, result) {
  //   if (!err) res.send({ message: "Registered Successfully" });
  //   else res.send({ message: err });
  // });
});

app.post("/newpost", function (req, res) {
  const post = new Post({
    title: req.body.title,
    body: req.body.body,
  });
  post.save(function (err, result) {
    if (!err) res.send({ message: "post submitted" });
    else res.send({ message: err });
  });
});

app.get('/allposts',function(req,res){
  Post.find({},function(err,data){
      console.log("post route");  
      res.send(data)
  })
})

app.post('/addCodeforcesHandle', function (req, res) {
  User.updateOne({ id: req.body.id }, { $set: { codeforces: req.body.codeforces } });
})
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(process.env.PORT || 4000, function () {
  console.log("server running on port 4000");
});
