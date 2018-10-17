require('./config/config')

const _ = require('lodash')
const express = require('express')
const bodyParser = require('body-parser')


const app = express()
app.use(bodyParser.json())

const PORT = process.env.PORT || 3001

app.get('/', (req, res) => {
  res.send('Working fine')
})

app.listen(PORT, (err) => {
  if (err) return console.log(err)
  console.log(`Express server started at ${PORT}`)
})