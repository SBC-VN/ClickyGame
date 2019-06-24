import React from 'react';

import './style.css';

const Modal = (props) => {
    console.log("Modal show",props.show);
    return (
        props.show ?
        <div>
            {console.log("show")}
            <div className="modal-wrapper"
                style={{
                    transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                <div className="modal-header">
                    <h3>Modal Header</h3>
                    <span className="close-modal-btn" onClick={props.close}>×</span>
                </div>
                <div className="modal-body">
                    <p>
                        {props.children}
                    </p>
                </div>
                <div className="modal-footer">
                    <button className="btn-cancel" onClick={props.close}>CLOSE</button>
                    <button className="btn-continue">CONTINUE</button>
                </div>
            </div>
        </div> 
        : <span></span>
    )
}

export default Modal;