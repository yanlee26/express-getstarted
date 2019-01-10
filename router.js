var express = require('express')
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now())
  req.time=new Date()
  next()
})
// define the home page route
router.get('/', function (req, res) {
  res.send(`<mark> Requested at: ${req.time} </mark>  Birds home page`)
})
// define the about route
router.get('/about', function (req, res) {
  res.send('About birds')
})

module.exports = router