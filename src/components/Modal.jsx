import React from 'react'
import '../styles/modal.css'

const Modal = ({ text, toggleModal }) => {
    return (
        <div className='overlay' onClick={toggleModal}>
            <div className="modal-content">
                <p>{text}</p>
                <button onClick={toggleModal}>CLOSE</button>
            </div>

        </div>
    )
}

export default Modal