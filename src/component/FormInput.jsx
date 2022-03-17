import React, { useState } from 'react'
import './formInput.css'

const FormInput = (props) => {
  const {label, errorMessage, onChange, id, ...inputProps} = props
  const [focus, setFocus] = useState(false)
  
  const handleFocus = (e) => {
    setFocus(true)
  }

  return (
    <div className='formInput'>
      <input
        {...inputProps} 
        onChange={onChange} 
        onBlur={handleFocus}
        onFocus={() => inputProps.name === 'confirmPassword' && setFocus(true)}
        focus={focus.toString()} />
      <span>{errorMessage}</span>
      <label htmlFor="">
      </label>
  </div>
  )
}

export default FormInput