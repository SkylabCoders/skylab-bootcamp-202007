import React from 'react';
import errorHandle from '../errors/errorsHandle';
import PopUp from '../components/popup.component';
let error = { error: { code: 0, message: 'string' } }


const popTypes = {
    INFO: 'info',
    WARNING: 'warning',
    ERROR: 'error',
    SUCCESS: 'success'
}
describe('App Snapshot', () => {

    it('renders correctly', () => {
        expect(errorHandle(error)).toEqual(<PopUp tipe={popTypes.ERROR} message='string' />)


    })
    it('renders correctly', () => {
        error.error.code = 4
        expect(errorHandle(error)).toEqual(<PopUp tipe={popTypes.WARNING} message='string' />)

    })
    it('renders correctly', () => {
        error.error.code = 5
        expect(errorHandle(error)).toEqual(<PopUp tipe={popTypes.SUCCESS} message='string' />)

    })
    it('renders correctly', () => {
        error.error.code = 7
        expect(errorHandle(error)).toEqual(<PopUp tipe={popTypes.INFO} message='string' />)

    })
})