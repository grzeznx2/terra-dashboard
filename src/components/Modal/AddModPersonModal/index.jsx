import React from 'react'
import Modal from '..'
import Form from '../../Form'

const AddModPersonModal = ({ isOpen, closeModal, formFields }) => {
  return (
    <Modal isOpen={isOpen} closeModal={closeModal} title="Execute addmodperson">
      <Form formFields={formFields} closeModal={closeModal} />
    </Modal>
  )
}

export default AddModPersonModal
