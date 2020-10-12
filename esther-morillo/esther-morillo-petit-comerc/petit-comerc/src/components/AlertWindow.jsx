import React from 'react';
import './alertWindow.scss';

function AlertWindow({ color, message }) {
    function setWindowColor() {
        if (document.getElementsByClassName('container__alert')[0]) {
            document.getElementsByClassName(
                'container__alert'
            )[0].style.background = color;
            document
                .getElementsByClassName('container__alert')[0]
                .classList.add('container__alert-hide');
        }
    }
 
    return (
        <>
            <div className='alert__container'>
                <div className='container__alert'>
                    <p>{message}</p>
                </div>
            </div>
            {setWindowColor()}
        </>
    );
}

export default AlertWindow;