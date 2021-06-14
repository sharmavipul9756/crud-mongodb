const express = require('express');
const app = express();
const port  = process.env.port || 3000;
const mongoose = require('mongoose')
require('dotenv/config')
app.use(express.json())
//requiring routes
app.use('/posts',require('./routes/post'))

mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser: true,useUnifiedTopology: true},()=>{
    console.log("connected to db");
})
app.listen(port);