const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('../config');
const User = require('../models/user');

const userRouter = express.Router();

userRouter.use(bodyParser.json());

userRouter.get('/', async (req, res) => {
    res.send("User Logged in Succcessfully");
});

userRouter.post('/', async (req,res,next) => {
    let roll = req.body.roll;
    let password = req.body.password;
    let role = req.body.role;

    await User.findOne({"roll": roll})
        .then(async (user) => {
            if(user) {
                console.log(user);
                
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                var data = {
                    'success': false,
                    'message': 'User already exists.'
                }
                res.json(data);
                console.log(data);
                return ""; 
            }

            var user = new User({
                "roll": roll,
                "password": password,
                "role" : role 
            });

            console.log(user);
  
            await User.create(user)
            .then((user) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                var data = {
                    'success': true,
                    'message': "User Created Successfully",
                    'userData' : user
                }
                res.json(data);
            },(err) => next(err))
            .catch((err) => next(err));
    },(err) => next(err))
    .catch((err) => next(err));
});

module.exports = userRouter;