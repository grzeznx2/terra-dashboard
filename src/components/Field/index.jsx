import React, { useState } from 'react'
import { AddModPersonModal, Button } from '..'
import './Field.scss'

const Field = ({ value, isExecutable, children, formFields }) => {
  const [isOpen, setIsOpen] = useState(false)

  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <AddModPersonModal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} title="Modal" formFields={formFields} />
      <li style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
        <ul onClick={() => setIsOpen(!isOpen)} style={{ cursor: `${children && 'pointer'}` }}>
          {children ? <span style={{ display: 'inline-block', marginRight: '1rem' }}>{isOpen ? '-' : '+'}</span> : null}
          {isExecutable ? <Button onClick={() => setIsModalOpen(true)}>{value}</Button> : value}
        </ul>
        {isOpen && children && <ul style={{ marginLeft: '2rem' }}>{children}</ul>}
      </li>
    </>
  )
}

export default Field
