const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000

// MIDDLEWARES
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

// DB CONNECTION
const db_conn = mongoose.connect(process.env.MONGO_URI,{
   useUnifiedTopology: true,
   useNewUrlParser: true,
   useCreateIndex: true, 
  },
   (err)=>{
  if(err) console.log("Database connection error : ", err);
  else console.log("Database connected successfully")
})

// TEST
app.get('/',(req, res)=>{
  res.send("This is the XMeme API")
})

// API
const api = require('./routes')
app.use('/', api);

// SERVER STARTER
app.listen(PORT, ()=>{
  console.log(`Server started at port : ${PORT}`)
})