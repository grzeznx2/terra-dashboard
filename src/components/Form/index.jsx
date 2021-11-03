import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { createTx } from '../../features/transactionsSlice'
import { Button } from '..'
import './Form.scss'
import { addTxToBlock } from '../../features/blocksSlice'

const initializeFields = fields =>
  fields.reduce((acc, cur) => {
    acc[cur.name] = {
      type: [cur.name].type,
      value: '',
      isValid: false,
    }
    return acc
  }, {})

const Form = ({ formFields, closeModal }) => {
  const [fields, setFields] = useState(initializeFields(formFields))
  const { network, block } = useSelector(state => state.chain)
  const dispatch = useDispatch()

  const updateField = field => e => {
    const fieldName = field.name
    const { value } = e.target
    setFields({ ...fields, [fieldName]: { ...fields[fieldName], value, isValid: value !== '' } })
  }

  const isFormValid = Object.values(fields).every(value => value.isValid)

  const handleSubmit = () => {
    const hash = uuidv4()
    dispatch(createTx({ network, block, hash }))
    dispatch(addTxToBlock({ network, block, hash }))
    closeModal()
  }

  return (
    <div className="form">
      <div className="form__wrapper">
        <div className="form__group-container">
          {formFields.map(field => {
            const { name, type } = field

            return (
              <div key={name} className="form__group">
                <label htmlFor={name} className="form__label">
                  {name}: {type}
                </label>
                <input value={fields[name].value} onChange={updateField(field)} type="text" name={name} id={name} className="form__input" />
              </div>
            )
          })}
        </div>
        <div className="form__button-container">
          <Button>Conect Wallet</Button>
          <Button disabled={!isFormValid} onClick={handleSubmit}>
            Send TX
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Form
