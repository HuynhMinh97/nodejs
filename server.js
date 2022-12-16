const express = require('express');
const app = express();
const UserRoute = require('./Routes/User.route')
require('dotenv').config();
// require('./helpers/connection_mongdb');
const createError = require('http-errors')
app.get('/',(req,res,next)=>{
    res.send('Home Page');
})
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/user',UserRoute);
app.use((req,res,next)=>{
    // const err =  new Error("Not found");
    // err.status = 500;
    next(createError.NotFound("This route does not exist."));
})

app.use((err,req,res,next)=>{
    res.json({
        status:err.status||500,
        message:err.message
    })
})

const PORT = process.env.PORT|| 3001;
app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`);
})