import React from 'react';

import './style.css';

const ModalContents = (props) => {
    console.log("Modal show",props);
    return (
        <div>
            <h2>{props.modalMessage}</h2>
            <button onClick={props.closeModal}>close</button>
        </div>
    )
}

export default ModalContents;