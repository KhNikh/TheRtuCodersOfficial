const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const https = require("https")
const cors = require("cors")
const app = express();
mongoose.connect("mongodb://localhost:27017/UserBD", {useNewUrlParser: true, useUnifiedTopology: true});

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json() )
app.use(cors());
const UserSchema = new mongoose.Schema({
    
    name:String,
    email: String,
    password:String,
    reEnterPassword:String
    
})
const User = mongoose.model('User',UserSchema);

app.get("/",function(req,res){
    res.send("Hello");
})
app.post("/login", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 

app.post('/register',function(req,res){
    console.log(req.body)
    const user = new User({name: req.body.name,email:req.body.email,password:req.body.password, reEnterpassword:req.body.reEnterPasswordpassword})
    user.save(function(err){

        if(!err)console.log("Sucessfully added data");
        else console.log(err);
    });
})

app.listen("3002",function(){
    console.log("server started at port 3002");
})