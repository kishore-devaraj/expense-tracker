import React from 'react';
import Modal from 'react-modal';
import './AddExpense.css'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    minWidth              : '400px',
    minHeight             : '500px'
  }
};

Modal.setAppElement('#root')


class AddExpense extends React.Component {

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.props.modalIsOpen}
          onRequestClose={this.props.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          {/* <section className="add-expense-modal-container">
            <div className="add-expense-title">Add Expense</div>
            <form className="expense-adding-form">
            </form>
          </section> */}
        </Modal>
      </div>
    );
  }
}

export default AddExpense
