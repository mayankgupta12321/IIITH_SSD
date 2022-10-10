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

    await User.findOne({"roll": roll, "password" : password, "role" : role})
        .then(async (user) => {
            if(user) {
                console.log(user);

                let loginMessage ;
                if(user.role == "student") {
                    loginMessage = "Student Logged in.";
                }
                else {
                    loginMessage = "TA Logged in.";
                }
                
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                var data = {
                    'success': false,
                    'message': 'User already exists.',
                    'loginMessage' : loginMessage
                }
                res.json(data);
                // console.log(data);
                return ""; 
            }

            res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                var data = {
                    'success': false,
                    'message': 'User does not exists.'
                }
                res.json(data);
                // console.log(data);
                return ""; 

    },(err) => next(err))
    .catch((err) => next(err));
});

module.exports = userRouter;