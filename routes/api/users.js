const express = require('express');

//Modules for encrypting passwords
const AES = require('crypto-js/aes');
const SHA256 = require('crypto-js/sha256');

//short for user-router
const urouter = express.Router();

// Import the User model
const User = require('../../models/User');

//GETS all the users from the database
urouter.get('/',(req,res)=>{
    User.find().then((users)=>{
        res.json(users);
    })
})

//POSTS a new user to the database
urouter.post('/',(req,res)=>{
    const newUser = new User({
        username: '@'+req.body.username,
        email: req.body.email,
        password: SHA256(req.body.password)
    })

    newUser.save('users').then(user => res.json(user)).catch(err => console.log(err));
})

module.exports = urouter;