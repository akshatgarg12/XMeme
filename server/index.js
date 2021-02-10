const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 8081
const swaggerJsdoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")
const swaggerDoc = require('./swagger.json')
app.use(
  "/swagger-ui",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDoc)
);
// MIDDLEWARES
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

// DB CONNECTION
const __prod__ = process.env.NODE_ENV === "production" 
const mongo_db_connection_mode = __prod__ ? process.env.MONGO_URI : "mongodb://localhost:27017/XMeme"
const db_conn = mongoose.connect(mongo_db_connection_mode,{
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