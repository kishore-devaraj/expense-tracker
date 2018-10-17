import React from 'react'
import './CustomButton.css'

const CustomButton = ({buttonText, handleSubmit, type = 'submit', fontSize = '1em',
 backgroundColor = '#14C5DF', width = '35%', height = '3em', margin = '1.875em 0'
}) => {
  let containerStyle = {
    width: width,
    height: height
  }
  let buttonStyle = {
    fontSize: fontSize,
    backgroundColor: backgroundColor,
    margin: margin
  }

  return (
    <div className='custom-button-container' style={containerStyle}>
      <button className='custom-button' style={buttonStyle} type={type} onSubmit={handleSubmit}>{buttonText}</button>
    </div>
  )
}

export default CustomButton
