import React, { useState, useReducer, useEffect } from 'react';

/*
const Modal = (closeModal, modalContent) => {

    useEffect(() => {
        setTimeout(() => {
            closeModal();
        }, 3000);
    });

    return (
        <div className='modal'>
            <p>{modalContent}</p>
        </div>
    )
}

export default Modal
*/


const Modal = ({ closeModal, modalContent }) => {

    useEffect(() => {
        setTimeout(() => {
            closeModal();
        }, 3000);
    });

    return (
        <div>
            {modalContent}
        </div>
    )
}

export default Modal
