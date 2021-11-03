import React from 'react'

import './Button.scss'

const Button = ({ onClick, children, disabled, type, modifier = 'primary' }) => {
  return (
    <button className={`btn btn--${modifier}`} onClick={onClick} disabled={disabled} type={type}>
      {children}
    </button>
  )
}

export default Button
