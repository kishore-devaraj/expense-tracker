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
          contentLabel={this.props.modalTitle}
        >
          <section className="add-expense-modal-container">
            <div className="add-expense-header">
              <div className="add-expense-title">{this.props.modalTitle}</div>
              <img src={closeIcon} alt='close icon' style={{cursor: 'pointer'}} onClick={this.props.closeModal} />
            </div>
            <form className="expense-adding-form" autoComplete='off' onSubmit={this.props.handleSubmit}>
            <CustomInput type='text' value={this.props.updateTitle} onChange={this.props.onTitleChange} label='Title' id='titleField' name='titleId' placeholder='Title goes here' />
            <CustomInput type='number' value={this.props.updateAmount} onChange={this.props.onAmountChange} label='Amount' id='amountField' name='amountId' placeholder='Amount Spent' />
            <CustomInput type='text' value={this.props.updateDate} onChange={this.props.onDateChange} label='Date' id='dateField' name='dateId' placeholder='DD/MM/YYYY' />
            <CustomButton buttonText={this.props.modalTitle.indexOf('Add') !== -1 ? 'Add' : 'Save'} />
            </form>
          </section>
        </Modal>
      </div>
    );
  }
}

export default AddExpense
