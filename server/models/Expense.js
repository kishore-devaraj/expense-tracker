const { mongoose } = require('../db/db')
const uniqueValidator = require('mongoose-unique-validator')

const ExpenseSchema = new mongoose.Schema({
  title: {
    type: 'String',
    required: true,
    trim: true,
    minlength: 1,
    unique: true
  }, 
  amount: {
    type: 'Number',
    required: true,
    minlength: 1
  }, 
  time: {
    type: 'Number',
    required: true
  }
})

ExpenseSchema.plugin(uniqueValidator)

const Expense = mongoose.model('Expense', ExpenseSchema)

module.exports = {
  Expense
}