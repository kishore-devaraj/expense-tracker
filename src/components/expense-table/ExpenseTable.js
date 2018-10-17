import React from 'react'

import './ExpenseTable.css'
import plusIcon from '../../assets/plus-circle-outline.svg'

import ExpenseTableView from '../expense-table-view/ExpenseTableView'
import AddExpense from '../add-expense/AddExpense'

class ExpenseTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listOfExpense: [{
        date: "2 Sept 2018",
        title: "First Expense",
        amount: 500
      }, {
        date: "2 Sept 2018",
        title: "First Expense",
        amount: 500
      }, {
        date: "2 Sept 2018",
        title: "First Expense",
        amount: 500
      }, {
        date: "2 Sept 2018",
        title: "First Expense",
        amount: 500
      }, {
        date: "2 Sept 2018",
        title: "First Expense",
        amount: 500
      }],
      modalIsOpen: false
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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
        afterOpenModal={this.state.afterOpenModal}
        closeModal={this.state.closeModal}/>
      </section>
    )
  }
}

export default ExpenseTable