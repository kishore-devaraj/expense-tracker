import React from 'react'
import moment from 'moment'
import './ExpenseTableView.css'
import trashIcon from '../../assets/delete.svg'
import editIcon from '../../assets/edit.svg'

class ExpenseTableView extends React.Component {
  render() {
    return (
      <section className='table-container'>
        <table>
          <thead>
            <tr>
              <th> Date </th>
              <th> Title </th>
              <th> Amount </th>
              <th> Update </th>
              <th> Remove </th>
            </tr>
          </thead>
          <tbody>
            {this.props.listOfExpense.length !== 0 ?
              this.props.listOfExpense.map((listElement, index) =>
                <TableRow key={listElement.date + listElement.title + index}
                  serialNo={index}
                  time={listElement.time}
                  title={listElement.title}
                  amount={listElement.amount}
                  handleUpdate={this.props.handleUpdate}
                  handleDelete={this.props.handleDelete} />
              ) : <tr><td id="noUserTd">No Expense is found</td></tr>}
          </tbody>
        </table>
      </section>
    )
  }
}

const TableRow = (props) => {
  return (
      <tr>
          <td>{moment(props.time).format("DD/MM/YYYY")}</td>
          <td>{props.title}</td>
          <td>{props.amount}</td>
          <td onClick={props.handleUpdate}>
              <img src={editIcon} alt='Update icon' id={props.serialNo} style={{cursor: 'pointer'}}/>
          </td>
          <td onClick={props.handleDelete}>
              <img src={trashIcon} alt='Delete icon' id={props.serialNo} style={{cursor: 'pointer'}}/>
          </td>
      </tr>
  )
}

export default ExpenseTableView