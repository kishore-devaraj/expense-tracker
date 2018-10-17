import React from 'react'
import './CustomInput.css'

const CustomInput = ({type, label, placeholder, name, id = 'custom-input'}) => {
  return (
    <div className='custom-input-container'>
      <label htmlFor={id} className='custom-input-label'>
        {label}
      </label>
      <input type={type} id={id} name={name} className='custom-input' placeholder={placeholder} />
    </div>
  )
}

export default CustomInput
