const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const server = express();
mongoose.connect("mongodb://127.0.0.1:27017/testUsers");
console.log('db connected');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    contact: String,
    password: String,
    dateJoined: {
        type: Date,
        default: Date.now 
      }
});

const User = mongoose.model('User',userSchema);




// Middlewares
server.use(cors());
server.use(bodyParser.json());

// API's
server.post('/add-user' , (req,res)=>{
    res.send(req.body);
    // console.log(req.body);
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        contact: req.body.contact,
        password: req.body.password
    });
    user.save();
});

server.get('/get-user' , (req,res)=>{
    User.find()
        .then(foundUser=>{
            res.send(foundUser);
        })
        .catch (err=> {
            console.log("Error occured while getting from db.")
});
});

server.post('/del-user' , (req,res)=>{
    const id = req.body.id;
    // res.send(req.body.id)
    User.findByIdAndDelete(id).then(res.send("User Deleted")).catch(err=>{console.log(err);})
});



server.listen(8080,()=>{
    console.log("Server Started at 8080....");
})
