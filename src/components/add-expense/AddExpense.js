import React from 'react';
import Modal from 'react-modal';
import './AddExpense.css'
import closeIcon from '../../assets/close.svg'
import CustomInput from '../reusables/custom-input/CustomInput'
import CustomButton from '../reusables/custom-button/CustomButton'


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    minWidth              : '400px',
    minHeight             : '400px',
  }
};

Modal.setAppElement('#root')

class AddExpense extends React.Component {

  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.modalIsOpen}
          onRequestClose={this.props.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <section className="add-expense-modal-container">
            <div className="add-expense-header">
              <div className="add-expense-title">Add Expense</div>
              <img src={closeIcon} alt='close icon' style={{cursor: 'pointer'}} onClick={this.props.closeModal} />
            </div>
            <form className="expense-adding-form" autoComplete='off' onSubmit={this.props.handleSubmit}>
            <CustomInput type='text' label='Title' id='title-field' name='titleId' placeholder='Title goes here' />
            <CustomInput type='text' label='Amount' id='amount-field' name='amountId' placeholder='Amount Spent' />
            <CustomInput type='text' label='Date' id='date-field' name='dateId' placeholder='On Which Date' />
            <CustomButton buttonText='Add' />
            </form>
          </section>
        </Modal>
      </div>
    );
  }
}

export default AddExpense
