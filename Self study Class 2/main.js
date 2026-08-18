const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')
const shop = require('./routes/shop')

app.use(express.static('public'))
// 
app.use('/blog' , blog)
app.use('/shop' , shop)

// GET Request, default and used to retrieve data from the server
app.get('/', (req, res) => {
    console.log("Hey, its a get request")
    res.send('Hello Ayesha!')
})

// POST Request, used to submit data to the server
app.post('/', (req, res) => {
    console.log("Hey its a post request")
    res.send('Hello World post!')
})

// Serving a HTML file
app.get('/index', (req, res) => {
    res.sendFile('templates/index.html' , {root: __dirname})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

