const dotenv = require('dotenv');
const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt =require('jsonwebtoken');
const cookieParser = require('cookie-Parser');
const app = express();
dotenv.config({path :'./config.env'});
require('./db/conn');
const port =process.env.PORT;
const Users =require('./models/userSchema');
app.Users = require('./models/userSchema');
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.send('Hello World');
})
//Registration
app.post('./register', async(req,res)=>{
    try{

        const username =req.body.username;
        const email =req.body.email;
        const password =req.body.password;

        const createUser = new Users({
            username :username,
            password :password


        });
        const created = await createUser.save();
        console.log(created);
        res.status(200).send("Registered");

    }catch(error){
        res.status(400).send(error)

    }
})

app.listen(port,()=>{
    console.log("Server is Listening")
})