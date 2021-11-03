import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.scss'

const Modal = ({ isOpen, closeModal, title, children }) => {
  const modalRoot = document.getElementById('modal-root')

  const modalMarkup = (
    <div className="modal">
      <div onClick={closeModal} className="modal__background" />
      <div className="modal__container">
        <div className="modal__title-wrapper">
          <h3 className="modal__title">{title}</h3>
        </div>
        <div className="modal__content">{children}</div>
      </div>
    </div>
  )

  return isOpen && ReactDOM.createPortal(modalMarkup, modalRoot)
}

export default Modal
