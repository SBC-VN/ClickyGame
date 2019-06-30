import React from 'react';

import './style.css';

const ModalContents = (props) => {
    return (
        <div className="model-content">
            <h2>{props.modalMessage}</h2>
            <button onClick={props.closeModal}>close</button>
        </div>
    )
}

export default ModalContents;