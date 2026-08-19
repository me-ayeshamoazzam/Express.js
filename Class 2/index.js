const express = require("express")
const app = express()
const port = 3000

app.get("/", (req,res) => { 
    res.send("Hello world")
 })
app.get("/user/:username" , (req, res) => { 
    const username = req.params.username
    res.send(`Hello ${username}`)
 })

function validateId(req, res, next){
    const Id = parseInt(req.params.Id)
    if(isNaN(Id) || Id <=0){
        return res.status(400).json({
            success: false,
            message: "Incorrect id"
        }) // .json() converts the object to JSON and sends it to the client.
        // JSON is commonly used because it provides structured data that's easy for clients to process.
    }
    next()
}

 app.get("/product/:Id", validateId,  (req, res, next) => { 
    const productId =  parseInt(req.params.Id)
    if (productId !== 1) {
        const err = new Error("Product not found") // new Error() creates an Error object with a message from the built-in JavaScript Error class.  
        err.status = 404
        return next(err) // This says: Something went wrong. I'm handing this error to Express.
    }
    res.json({
        id: productId,
        message: "Sample Product"
    })
  })

  // Handing the error to Express:

 app.use((err, req, res, next) => {
    // Error-handling middleware has 4 parameters: (err, req, res, next)
     // It handles errors passed using next(err).
    res.status(err.status || 500).json({
        success: false,
        message: err.message
    })
})


app.listen(port, () => { 
    console.log(`Example app listening on port ${port}`)
 })