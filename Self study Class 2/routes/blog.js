const express = require('express')
const router = express.Router()

// define the home page route
router.get('/', (req, res) => {
  res.send('This is a blog')
})

// define the about route
router.get('/blogpost', (req, res) => {
  res.send('Ths is a blog post')
})

module.exports = router
