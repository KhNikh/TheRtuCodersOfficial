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
});
const User = mongoose.model("User", UserSchema);

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
  console.log(req.body);
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    reEnterpassword: req.body.reEnterPasswordpassword,
  });
  User.findOne({ email: user.email }, (err, user) => {
    if (email === user.email) {
      res.send({ message: "User already exist" });
    } else {
      user.save(function (err) {
        if (!err) res.send({ message: "Registered Successfully" });
        else res.send({ message: err });
      });
    }
  });
});

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
