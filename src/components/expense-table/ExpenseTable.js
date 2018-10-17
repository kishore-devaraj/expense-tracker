import React from 'react'
import fetch from 'cross-fetch'
import moment from 'moment'

import './ExpenseTable.css'
import { expenseEndPoint } from '../../config/httpConfig'
import plusIcon from '../../assets/plus-circle-outline.svg'

import ExpenseTableView from '../expense-table-view/ExpenseTableView'
import AddExpense from '../add-expense/AddExpense'
import { get } from 'https';

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
    this.getExpense = this.getExpense.bind(this)
  }

  componentDidMount() {
    this.getExpense()
  }

  getExpense () {
    fetch(expenseEndPoint)
      .then(res => res.json())
      .then(expenses => {
        console.log(expenses)
        this.setState({ listOfExpense: expenses })
      })
      .catch(e => console.log(e))
  }


  handleDelete(e) {
    e.preventDefault()
    let indexToBeDeleted = e.target.id
    // console.log(indexToBeDeleted)
    let newListOfExpense = this.state.listOfExpense.slice()
    newListOfExpense = newListOfExpense.filter((expense, index) => {  
         
      if(index === Number(indexToBeDeleted)){
        const id = expense._id
        fetch(expenseEndPoint + '/' + id, {
          method: 'delete',
          headers: {"Content-Type": "application/json"}
        }).then(res => {
          console.log('Deleted')
        })
        .catch(err => console.log(err))
        return false
      } else return expense
    })

    this.setState({listOfExpense: newListOfExpense})
  }

  handleUpdate(e) {
    e.preventDefault()
    console.log('Updating')
  }

  handleAddExpenseSubmit(e) {
    e.preventDefault()
    const title = e.target.titleId.value
    const amount = e.target.amountId.value
    const time = moment(e.target.dateId.value, "DD/MM/YYYY").valueOf();

    // console.log(title)
    // console.log(amount)
    // console.log(time)

    if (title !== '' && amount !== 0 && time !== null) {
      const postRequestData = {
        title,
        amount,
        time
      }
      console.log(postRequestData)
      
      fetch(expenseEndPoint, {
        method: 'post',
        headers: {
          "Content-Type": "application/json",
      },
        body: JSON.stringify(postRequestData)
      }).then(res => console.log(res))
      .catch(e => console.log(e))
      this.closeModal()
      console.log('Submitted')
    }
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
    this.getExpense()
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