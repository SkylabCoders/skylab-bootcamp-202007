import React from 'react';
import PopUp from '../components/popup.component'

const popTypes = {
    INFO: 'info',
    WARNING: 'warning',
    ERROR: 'error',
    SUCCESS: 'success'
}
function errorsHandle({ error }) {
    let message = error.message
    let tipe = 'info'
    console.log(error)
    switch (error.code) {
        case 0:
        case 1:
        case 2:
        case 3:
            tipe = popTypes.ERROR
            break;

        case 4:
            tipe = popTypes.WARNING
            break;
        case 5:
        case 6:
            tipe = popTypes.SUCCESS
            break;

        case 7:
            tipe = popTypes.INFO
            break;
    }
    return (<PopUp tipe={tipe} message={message} />)

}
export default errorsHandle;