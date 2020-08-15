import React from 'react'

const Modal = ({ selectedImg }) => {
    return (
        <div>
            <img src={ selectedImg } alt="large pic"/>
        </div>
    )
}

export default Modal
