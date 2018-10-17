require('./config/config')

const _ = require('lodash')
const express = require('express')
const bodyParser = require('body-parser')
const {ObjectId} = require('mongodb')

const { Expense } = require('./models/Expense')


const app = express()
app.use(bodyParser.json())

const PORT = process.env.PORT || 3001

app.get('/', (req, res) => {
  res.send('Working fine')
})

app.post('/api/v1/expense', (req, res) => {
  const body = _.pick(req.body, ['title', 'time', 'amount'])
  let expense = new Expense(body)
  expense.save()
  .then(expense => {
    res.send(expense)
  }).catch(err => res.status(400).send(err))
})



app.get('/api/v1/expense', (req, res) => {
  Expense.find({})
  .then(expenses => res.send(expenses))
  .catch(e => res.status(400).send(e))
})



app.delete('/api/v1/expense/:id', (req, res) => {
  const id = req.params.id
  if(!ObjectId.isValid(id)) return res.status(404).send({'errorMessage' : 'Expense id is not valid'})

  Expense.findOneAndRemove({
    _id: id,
  })
  .then(expense => {
    if(!expense) return res.status(404).send({expense})
    return res.send({expense})
  }).catch( e => res.status(400).send())
})



app.listen(PORT, (err) => {
  if (err) return console.log(err)
  console.log(`Express server started at ${PORT}`)
})