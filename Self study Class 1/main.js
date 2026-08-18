const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))


app.get('/', (req, res) => {
  res.send('Hello world!')
})
app.get('/home', (req, res) => {
  res.send('Welcome to home')
})
app.get('/about', (req, res) => {
  res.send('About us, ayesha')
})
app.get('/blog/:slug/:second', (req, res) => {
  //res.send('Hello there, ' + req.params.slug + " and " + req.params.second)
  res.send(`Hello ${req.params.slug} and ${req.params.second}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
