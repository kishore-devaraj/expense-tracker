import React from 'react'
import fetch from 'cross-fetch'

import './ExpenseTable.css'
import { expenseEndPoint } from '../../config/httpConfig'
import plusIcon from '../../assets/plus-circle-outline.svg'

import ExpenseTableView from '../expense-table-view/ExpenseTableView'
import AddExpense from '../add-expense/AddExpense'

class ExpenseTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listOfExpense: [],
      modalIsOpen: false
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleAddExpenseSubmit = this.handleAddExpenseSubmit.bind(this)
  }

  componentDidMount () {
    console.log(expenseEndPoint)

    fetch('http://localhost:3001/api/v1/expense')
    .then(res => res.json())
    .then(expenses => {
      console.log(expenses)
      this.setState({listOfExpense: expenses})
    })
    .catch(e => console.log(e))
  }


  handleDelete(e) {
    e.preventDefault()
    let indexToBeDeleted = e.target.id
    console.log(indexToBeDeleted)
    // let newListOfNames = this.state.listOfNames.slice()
    // newListOfNames = newListOfNames.filter((name, index) => {
    //   return index === indexToBeDeleted ? false : name
    // })
    // this.setState({listOfNames: newListOfNames})
  }

  handleUpdate(e) {
    e.preventDefault()
    console.log('Updating')
  }

  handleAddExpenseSubmit (e) {
    e.preventDefault()
    console.log(e.target.titleId.value)
    console.log(e.target.amountId.value)
    console.log(e.target.dateId.value)
    console.log('Submitted')
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <section className="expense-table-container">
        <div className="expense-table-details-container">
          <img src={plusIcon} alt="add icon" onClick={this.openModal} />
          Create New Expense
        </div>
        <ExpenseTableView
          listOfExpense={this.state.listOfExpense}
          handleDelete={this.handleDelete}
          handleUpdate={this.handleUpdate}
        />
        <AddExpense 
        modalIsOpen={this.state.modalIsOpen} 
        closeModal={this.closeModal}
        handleSubmit={this.handleAddExpenseSubmit} />
      </section>
    )
  }
}

export default ExpenseTable