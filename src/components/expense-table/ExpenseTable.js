import React from 'react'

import './ExpenseTable.css'
import plusIcon from '../../assets/plus-circle-outline.svg'

import ExpenseTableView from '../expense-table-view/ExpenseTableView'

class ExpenseTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listOfExpense: [{
        date: "2 Sept 2018",
        title: "First Expense",
        amount:  500
      }, {
        date: "2 Sept 2018",
        title: "First Expense",
        amount:  500
      }, {
        date: "2 Sept 2018",
        title: "First Expense",
        amount:  500
      }, {
        date: "2 Sept 2018",
        title: "First Expense",
        amount:  500
      }, {
        date: "2 Sept 2018",
        title: "First Expense",
        amount:  500
      }]
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  handleDelete (e) {
    e.preventDefault()
    let indexToBeDeleted = e.target.id
    console.log(indexToBeDeleted)
    // let newListOfNames = this.state.listOfNames.slice()
    // newListOfNames = newListOfNames.filter((name, index) => {
    //   return index === indexToBeDeleted ? false : name
    // })
    // this.setState({listOfNames: newListOfNames})
  }

  handleUpdate (e) {
    e.preventDefault()
    console.log('Updating')
  }

  render() {
    return (
      <section className="expense-table-container">
        <div className="expense-table-details-container">
          <img src={plusIcon} alt="add icon" />
          Create New Expense
        </div>
        <ExpenseTableView 
            listOfExpense={this.state.listOfExpense}
            handleDelete={this.handleDelete}
            handleUpdate={this.handleUpdate}
            />
      </section>
    )
  }
}

export default ExpenseTable