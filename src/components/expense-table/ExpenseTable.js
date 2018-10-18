import React from 'react'
import fetch from 'cross-fetch'
import moment from 'moment'

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
      modalIsOpen: false,
      updateAmount: 0,
      updateTitle: '',
      updateDate: '',
      modalTitle: 'Add Expense'
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
        this.setState({ listOfExpense: expenses })
      })
      .catch(e => console.log(e))
  }


  handleDelete(e) {
    e.preventDefault()
    const indexToBeDeleted = e.target.id
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
    const indexToBeUpdate = e.target.id
    const expenseNeedToUpdate = this.state.listOfExpense[indexToBeUpdate]
    this.expenseId = expenseNeedToUpdate._id

    this.setState ({
      updateTitle: expenseNeedToUpdate.title,
      updateAmount: expenseNeedToUpdate.amount,
      updateDate: moment(expenseNeedToUpdate.time).format("DD/MM/YYYY"),
      modalTitle: 'Edit Expense'
    })
    this.openModal()
  }

  handleAddExpenseSubmit(e) {
    e.preventDefault()
    const title = e.target.titleId.value
    const amount = e.target.amountId.value
    const time = moment(e.target.dateId.value, "DD/MM/YYYY").valueOf();
    const method = this.state.modalTitle.indexOf('Add') !== -1 ? 'POST' : 'PUT'
    const endPoint = method === 'POST' ? expenseEndPoint : expenseEndPoint + '/' + this.expenseId
    if (title !== '' && amount !== 0 && time !== null) {
      const postRequestData = {
        title,
        amount,
        time
      }

      fetch(endPoint, {
        method: method,
        headers: {
          "Content-Type": "application/json",
      },
        body: JSON.stringify(postRequestData)
      }).then(res => console.log(res))
      .catch(e => console.log(e))
      this.closeModal()
    }
  }

  openModal(title) {
    this.setState({ 
      modalIsOpen: true,
    });
  }

  closeModal() {
    this.setState({ 
      modalIsOpen: false, 
      updateTitle: '',
      updateAmount: 0,
      updateDate: '',
      modalTitle: 'Add Expense'
    });
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
          modalTitle={this.state.modalTitle}
          updateAmount={this.state.updateAmount}
          updateTitle={this.state.updateTitle}
          updateDate={this.state.updateDate}
          handleSubmit={this.handleAddExpenseSubmit} 
          onTitleChange={(e) => this.setState({updateTitle: e.target.value})}
          onAmountChange={(e) => this.setState({updateAmount: e.target.value})}
          onDateChange={(e) => this.setState({updateDate: e.target.value})}
          />
      </section>
    )
  }
}

export default ExpenseTable