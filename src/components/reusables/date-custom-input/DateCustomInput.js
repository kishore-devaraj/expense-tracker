import React from 'react'
import './DateCustomInput.css'

class DateCustomInput extends React.Component {

  render () {
    return (
      <div className='custom-input-container'>
        <label htmlFor={this.props.id} className='custom-input-label'>
          {this.props.label}
        </label>
        <input type={this.props.type} id={this.props.id} name={this.props.name} className='custom-input' 
        placeholder={this.props.placeholder} onClick={this.props.onClick} value={this.props.value}
        onChange={this.props.onChange}/>
      </div>
    )
  }
}

export default DateCustomInput
