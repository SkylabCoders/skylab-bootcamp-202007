import axios from 'axios';
import dispatcher from '../dispatcher/dispatcher'
import actionTypes from './actionTypes';
import URL from './URL';

function holdExceptions(recivedData) {
    if (recivedData && recivedData.response && recivedData.response.data) {
        dispatcher.dispatch({
            type: actionTypes.ERROR,
            data: recivedData.response.data
        })
    } else {
        dispatcher.dispatch({
            type: actionTypes.ERROR,
            data: { error: { code: 1, message: recivedData.toString() } }
        })
    }
}

function holdResponse(recibedData, tipe) {
    if (recibedData.status === 200) {
        dispatcher.dispatch({
            type: tipe,
            data: recibedData.data
        })
    } else {
        dispatcher.dispatch({
            type: actionTypes.ERROR,
            data: recibedData.data
        })
    }
}

export function loadDetails() {
    const token = global.sessionStorage.getItem('access-token')
    axios.get(URL.GET_ENTRIES, { headers: { 'access-token': token } }).then((detailsRecives) => {
        holdResponse(detailsRecives, actionTypes.LOAD_DETAIL)
    }).catch((detailsRecives) => {
        holdExceptions(detailsRecives)
    })

}


export function loginActions(username, password) {
    return axios.post(URL.POST_LOGIN, { username, password }).then((detailsRecives) => {

        if (detailsRecives.status === 200) {
            global.sessionStorage.setItem('access-token', detailsRecives.data.token)
            dispatcher.dispatch({
                type: actionTypes.LOGIN,
                data: detailsRecives.data
            })
        }
        else {
            dispatcher.dispatch({
                type: actionTypes.ERROR,
                data: detailsRecives.data
            })
        }


    }).catch((detailsRecives) => {
        holdExceptions(detailsRecives)
    }
    )
}

export function registerActions(name, bootCamp, email, password, bday) {
    return axios.post(URL.POST_REGISTER, { name, bootCamp, email, password, bday }).then((detailsRecives) => {
        holdResponse(detailsRecives, actionTypes.REGISTER)



    }).catch((detailsRecives) => {
        holdExceptions(detailsRecives)
    }
    )
}

export function loadEntries(entriesTipe, userId) {

    const token = global.sessionStorage.getItem('access-token')
    return axios.get(`${URL.API_USER}/${entriesTipe}?userId=${userId}`, { headers: { 'access-token': token } }).then((detailsRecives) => {
        holdResponse(detailsRecives, actionTypes.LOAD_ENTRIES)

    }).catch((detailsRecives) => {
        holdExceptions(detailsRecives)
    }
    )
}

export function loadComments() {

    const token = global.sessionStorage.getItem('access-token')
    return axios.get(`${URL.INFO_COMMENTS}`, { headers: { 'access-token': token } }).then((detailsRecives) => {

        holdResponse(detailsRecives, actionTypes.LOAD_COMMENTS)


    }).catch((detailsRecives) => {
        holdExceptions(detailsRecives)
    }
    )
}

export function addCommentActions(userId, textComment, entryId) {
    const token = global.sessionStorage.getItem('access-token')

    return axios.post(`${URL.INFO_COMMENTS}`, { userId, textComment, entryId }, { headers: { 'access-token': token } }).then((detailsRecives) => {

        holdResponse(detailsRecives, actionTypes.ADD_COMMENT)


    }).catch((detailsRecives) => {
        holdExceptions(detailsRecives)
    }
    )
}

export function addEntryAction(objectInfo) {
    const token = global.sessionStorage.getItem('access-token')
    return axios.post(`${URL.ADD_ENTRY}`, objectInfo, { headers: { 'access-token': token } }).then((detailsRecives) => {

        holdResponse(detailsRecives, actionTypes.ADD_ENTRY)

    }).catch((detailsRecives) => {
        holdExceptions(detailsRecives)
    }
    )
}
export function editUser(objectInfo) {
    const token = global.sessionStorage.getItem('access-token')
    return axios.put(`${URL.EDIT}`, objectInfo, { headers: { 'access-token': token } }).then((detailsRecives) => {
        holdResponse(detailsRecives, actionTypes.ADD_ENTRY)
    }).catch((detailsRecives) => {
        holdExceptions(detailsRecives)
    }
    )
}
export function addPop(objectInfo) {
    const token = global.sessionStorage.getItem('access-token')
    return axios.patch(`${URL.ADD_POP}`, objectInfo, { headers: { 'access-token': token } }).then((detailsRecives) => {
        holdResponse(detailsRecives, actionTypes.ADD_ENTRY)
    }).catch((detailsRecives) => {
        holdExceptions(detailsRecives)
    }
    )
}
export function addLike(objectInfo) {
    const token = global.sessionStorage.getItem('access-token')
    return axios.patch(`${URL.INFO_COMMENTS}`, objectInfo, { headers: { 'access-token': token } }).then((detailsRecives) => {
        holdResponse(detailsRecives, actionTypes.ADD_ENTRY)
    }).catch((detailsRecives) => {
        holdExceptions(detailsRecives)
    }
    )
}