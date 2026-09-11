const express = require("express")
const app = express()
const mongoose = require("mongoose")
require("dotenv").config()
app.use(express.json())

// Routes:


mongoose.connect(process.env.MONGO_URI).then(() => {

  console.log("Mongodb is connected")
  app.listen(process.env.PORT, () =>{
    console.log(`Example app listening on port ${process.env.PORT}`)
  })
}).catch((err) =>{
    console.error("Error", err)
})