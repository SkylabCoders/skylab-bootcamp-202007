import dispatcher from '../appDispatcher'
import actionTypes from './actionTypes'

export function someFunction() {
    // Load data from somewhere
    return new Promise(resolve => {
        resolve('loadedData')
    }).then(data => {
        dispatcher.dispatch({
            type: 'action_type',
            data: 'previous loaded data'
        })
    })
}