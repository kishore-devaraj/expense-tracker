require('./config/config')

const _ = require('lodash')
const express = require('express')
const bodyParser = require('body-parser')
const {ObjectId} = require('mongodb')

const { Expense } = require('./models/Expense')


const app = express()
app.use(bodyParser.json())

app.use( function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, OPTIONS");
  next();
});

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

app.put('/api/v1/expense/:id', (req, res) => {
  const id = req.params.id
  if(!ObjectId.isValid(id)) return res.status(404).send({'errorMessage': 'Expense id is not valid'})
  
  const body = _.pick(req.body, ['title', 'time', 'amount'])
  Expense.findOneAndUpdate(
    {_id: id},
    {$set : body}, 
    {new : true})
  .then(expense => {
    if (!expense) {
      return Promise.reject()
    }
    res.send(expense)
  }).catch(e => res.status(404).send(e))
})



app.listen(PORT, (err) => {
  if (err) return console.log(err)
  console.log(`Express server started at ${PORT}`)
})