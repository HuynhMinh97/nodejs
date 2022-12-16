const express = require('express');
const route = express.Router();
const createError =  require('http-errors');
const User =  require('../Models/User.model');

route.post('/register',async(req,res,next)=>{
    try {
       const {email, password}= req.body; 
       if(!email||!password){
        throw createError.BadRequest();
       }

       const isExist =  await User.test.findOne({
        username:email
       })

       if(isExist){
        throw createError.Conflict(`${email} is ready been registered`);

       }
       const isCreate = await User.test.create({
        username:email,
        password
       })
       return res.json({
        status:'OKi',
        element:isCreate
       })

    } catch (error) {
        next(error);
    }
    res.send('function register')
});

route.post('/refresh-token',(req,res,next)=>{
    res.send('function refresh-token')
});

route.post('/login',(req,res,next)=>{
    res.send('function login')
});

route.post('/logout',(req,res,next)=>{
    res.send('function logout')
});


module.exports = route;