const express = require('express')
const app = express()
const port = 3000
const home = require('./routes/home')

app.use('/home',home)
// Basic middleware
app.use((req, res, next) => { 
    console.log(`${Date.now()} is the ${req.method}`) // req.method tells u which kind of request it is, such as get or post
    next();
 })

app.use((req, res, next) => { 
    console.log("m2")
    next();
 })



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
