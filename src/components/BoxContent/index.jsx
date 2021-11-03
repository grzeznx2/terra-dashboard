import React from 'react'
import { Field } from '..'
import './BoxContent.scss'

const BoxContent = ({ data }) => {
  const generateFields = data => {
    const keys = Object.keys(data)
    if (keys.length === 0) return 'Execute a message first!'
    return keys.map((key, index) => {
      let fieldValue
      let isExecutable = false
      let formFields
      const currentValue = data[key]

      if (typeof currentValue === 'object') {
        if (currentValue.isLink) {
          fieldValue = (
            <a className="box__content-link" href={currentValue.url} target="blank">
              {currentValue.value}
            </a>
          )
        } else if (currentValue.isExecutable) {
          isExecutable = true
          formFields = currentValue.fields
          fieldValue = currentValue.fields.map(field => (
            <li key={field.name}>
              {field.name}: {field.type}
            </li>
          ))
        } else {
          fieldValue = generateFields(currentValue)
        }
      } else {
        fieldValue = currentValue
      }
      return (
        <Field key={index} value={key} isExecutable={isExecutable} formFields={formFields}>
          {fieldValue}
        </Field>
      )
    })
  }

  return (
    <>
      <ul className="box-content">{generateFields(data)}</ul>
    </>
  )
}

export default BoxContent
