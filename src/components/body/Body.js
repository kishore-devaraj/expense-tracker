import React from 'react'
import './Body.css'

import Nav from '../nav/Nav'
import ExpenseTable from '../expense-table/ExpenseTable'

class Body extends React.Component {
  render () {
    return (
      <main>
        <Nav />
        <ExpenseTable />
      </main>  
    )
  }
} 

export default Body