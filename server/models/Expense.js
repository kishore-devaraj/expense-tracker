const { mongoose } = require('../db/db')

const ExpenseSchema = new mongoose.Schema({
  Title: {
    type: 'String',
    required: true,
    trim: true,
    minlength: 1,
    unique: true
  }, 
  Amount: {
    type: 'Number',
    required: true,
    minlength: 1
  }, 
  Date: {
    type: 'Number',
    required: true
  }
})

const Expense = mongoose.model('Expense', ExpenseSchema)

module.exports = {
  Expense
}