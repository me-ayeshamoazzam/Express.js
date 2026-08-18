const express = require("express")
const app = express()
const port = 3000

app.use((req, res, next) => {
    console.log("Middleware")
    next()
  })

app.get("/", (req, res) => { 
    res.send("Hello World!")
 })
app.get("/about", (req, res) => { 
    res.send("Hello About!")
 })
app.get("/services", (req, res) => { 
    res.send("Hello Services!")
 })

 app.listen(port, () => { 
    console.log(`Example app listening on port ${port}`)
  })