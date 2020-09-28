/* eslint-disable prefer-promise-reject-errors */
import Axios from "axios";
import { loadDetails, loginActions, registerActions, loadEntries, loadComments, addCommentActions, addEntryAction, editUser, addPop, addLike } from '../actions/userActions'
import store from '../store/store';
import errorsHandle from '../errors/errorsHandle';
import URL from '../actions/URL'
const user = 'gabri';
const pass = '1234';
const tipeEntry = 'entry';
const id = 1
jest.mock('axios');
jest.mock('../errors/errorsHandle')

describe('userActions testing', () => {

    afterEach(() => {
        Axios.mockReset()
        errorsHandle.mockReset()

    })
    it('Should return a Data', async () => {

        Axios.get.mockImplementationOnce(() =>
            Promise.resolve({
                status: 200,
                data: ['test']
            })
        );
        await loadDetails()
        expect(store.getDetail()).toEqual(['test']);


    })
    it('Should not  return a Data', async () => {

        Axios.get.mockImplementationOnce(() =>
            Promise.resolve({
                status: 400,
                data: 'sendederror'
            })
        );
        await loadDetails()
        expect(errorsHandle.mock.calls[0][0]).toEqual('sendederror');


    })
    it('Should catch the error Data on loadDetails', async () => {

        Axios.get.mockImplementationOnce(() =>
            Promise.reject({
                status: 400,
                response: {
                    data:
                        'error'
                }
            })
        );
        await loadDetails();
        expect(errorsHandle).not.toHaveBeenCalled()


    })
    it('Should call to post with the correct url', async () => {

        Axios.post.mockImplementationOnce(() =>
            Promise.resolve({
                status: 200,
                data: [45]
            })
        );
        await loginActions(user, pass)

        expect(Axios.post).toHaveBeenCalled();
        expect(Axios.post.mock.calls[0][0]).toBe(`http://${URL.IP}:4200/api/login`);
    })
    it('Should return a bad status', async () => {

        Axios.post.mockImplementationOnce(() =>
            Promise.resolve({
                status: 400,
                data: {
                    error: {
                        code: 7,
                        message: 'This e-mail already exist'
                    }
                }
            })
        );
        await loginActions(user, pass)
        expect(Axios.post.mock.calls[0][0]).toBe(`http://${URL.IP}:4200/api/login`);

    })
    it('Should catch the error Data on login Actions', async () => {

        Axios.post.mockImplementationOnce(() =>
            Promise.reject({
                status: 400,
                response: {
                    data: {
                        error: {
                            code: 7,
                            message: 'This e-mail already exist'
                        }
                    }

                }
            })
        );
        await loginActions(`ff`)
        expect(errorsHandle).toHaveBeenCalled();
        expect(errorsHandle.mock.calls[0][0]).toEqual({ "error": { "code": 7, "message": "This e-mail already exist" } })


    })
    it('Should call to post with the correct url', async () => {

        Axios.post.mockImplementationOnce(() =>
            Promise.resolve({
                status: 200,
                data: [45]
            })
        );
        await registerActions(user, pass)

        expect(Axios.post).toHaveBeenCalled();
        expect(Axios.post.mock.calls[3][0]).toBe(`http://${URL.IP}:4200/api/register`);
    })
    it('Should return a bad status', async () => {

        Axios.post.mockImplementationOnce(() =>
            Promise.resolve({
                status: 400,
                data: {
                    error: {
                        code: 7,
                        message: 'This e-mail already exist'
                    }
                }
            })
        );
        await registerActions(user, pass)
        expect(Axios.post.mock.calls[4][0]).toBe(`http://${URL.IP}:4200/api/register`);

    })
    it('Should catch the error Data on login Actions', async () => {
        Axios.post.mockImplementationOnce(() =>
            Promise.reject({
                status: 400,
                response: {
                    data: 'error on login actions'
                }

            })
        );
        await registerActions(`ff`)
        expect(errorsHandle).toHaveBeenCalled();
        expect(errorsHandle.mock.calls[0][0]).toEqual('error on login actions')
    });
    it('Should call Load entry with get method', async () => {

        Axios.get.mockImplementationOnce(() =>
            Promise.resolve({
                status: 200,
                data: [45]
            })
        );
        await loadEntries(tipeEntry, id)

        expect(Axios.get).toHaveBeenCalled();
        expect(Axios.get.mock.calls[3][0]).toBe(`${URL.API_USER}/${tipeEntry}?userId=${id}`);
    })
    it('Should return a bad status', async () => {

        Axios.get.mockImplementationOnce(() =>
            Promise.resolve({
                status: 400,
                data: {
                    error: {
                        code: 7,
                        message: 'This e-mail already exist'
                    }
                }
            })
        );
        await loadEntries(tipeEntry, id)
        expect(Axios.get.mock.calls[4][0]).toBe(`${URL.API_USER}/${tipeEntry}?userId=${id}`);

    })
    it('Should catch the error Data on load entries', async () => {
        Axios.get.mockImplementationOnce(() =>
            Promise.reject({
                status: 400,
                response: {
                    data: 'error on login actions'
                }

            })
        );
        await loadEntries(`ff`)
        expect(errorsHandle).toHaveBeenCalled();
        expect(errorsHandle.mock.calls[0][0]).toEqual('error on login actions')
    })
    it('Should catch the error exception on else Data on  load entries', async () => {
        Axios.get.mockImplementationOnce(() =>
            Promise.reject({
                status: 400,
                error: 'something else'

            })
        );
        await loadEntries(`ff`)
        expect(errorsHandle).toHaveBeenCalled();
        expect(errorsHandle.mock.calls[0][0].error.code).toEqual(1)
    })


    it('Should Load comments works with correct call', () => {

        Axios.get.mockImplementationOnce(() =>
            Promise.resolve({
                status: 200,
                data: [45]
            })
        );
        loadComments()

        expect(Axios.get).toHaveBeenCalled();
        expect(Axios.get.mock.calls[7][0]).toBe(`${URL.INFO_COMMENTS}`);
    })
    it('Should return a bad status', () => {

        Axios.get.mockImplementationOnce(() =>
            Promise.resolve({
                status: 400,
                data: {
                    error: {
                        code: 7,
                        message: 'some error'
                    }
                }
            })
        );
        loadComments()

        expect(Axios.get.mock.calls[8][0]).toBe(`${URL.INFO_COMMENTS}`);

    })
    it('Should catch the error Data on load entries', async () => {
        Axios.get.mockImplementationOnce(() =>
            Promise.reject({
                status: 400,
                response: {
                    data: 'error on login actions'
                }

            })
        );
        await loadComments()

        expect(errorsHandle).toHaveBeenCalled();
        expect(errorsHandle.mock.calls[0][0]).toEqual('error on login actions')
    })

    // ----------------- AddComentActios ------------------------ //

    it('Should Add Comment Actions works with correct call', () => {

        Axios.post.mockImplementationOnce(() =>
            Promise.resolve({
                status: 200,
                data: [45]
            })
        );
        addCommentActions()
        expect(Axios.post).toHaveBeenCalled();
        expect(Axios.post.mock.calls[6][0]).toBe(`${URL.INFO_COMMENTS}`);
    })
    it('Should return a bad status', () => {

        Axios.post.mockImplementationOnce(() =>
            Promise.resolve({
                status: 400,
                data: {
                    error: {
                        code: 7,
                        message: 'some error'
                    }
                }
            })
        );
        addCommentActions()
        expect(Axios.post.mock.calls[7][0]).toBe(`${URL.INFO_COMMENTS}`);

    })
    it('Should catch the error Add Coment', async () => {
        Axios.post.mockImplementationOnce(() =>
            Promise.reject({
                status: 400,
                response: {
                    data: 'error on login actions'
                }

            })
        );
        await addCommentActions()
        expect(errorsHandle).toHaveBeenCalled();
        expect(errorsHandle.mock.calls[0][0]).toEqual('error on login actions')
    })
    // --------------- ADDENTRYACTIONS ----------------------  //

    it('Should Add Comment Actions works with correct call', () => {

        Axios.post.mockImplementationOnce(() =>
            Promise.resolve({
                status: 200,
                data: [45]
            })
        );
        addEntryAction()
        expect(Axios.post).toHaveBeenCalled();
        expect(Axios.post.mock.calls[9][0]).toBe(`${URL.ADD_ENTRY}`);
    })
    it('Should return a bad status', () => {

        Axios.post.mockImplementationOnce(() =>
            Promise.resolve({
                status: 400,
                data: {
                    error: {
                        code: 7,
                        message: 'some error'
                    }
                }
            })
        );
        addEntryAction()
        expect(Axios.post.mock.calls[10][0]).toBe(`${URL.ADD_ENTRY}`);

    })
    it('Should catch the error Add Coment', async () => {
        Axios.post.mockImplementationOnce(() =>
            Promise.reject({
                status: 400,
                response: {
                    data: 'error on login actions'
                }

            })
        );
        await addEntryAction()
        expect(errorsHandle).toHaveBeenCalled();
        expect(errorsHandle.mock.calls[0][0]).toEqual('error on login actions')
    })

    // --------------- editUser ----------------------  //

    it('Should Add Comment Actions works with correct call', () => {

        Axios.put.mockImplementationOnce(() =>
            Promise.resolve({
                status: 200,
                data: [45]
            })
        );
        editUser()
        expect(Axios.put).toHaveBeenCalled();
        expect(Axios.put.mock.calls[0][0]).toBe(`${URL.EDIT}`);
    })
    it('Should return a bad status', () => {

        Axios.put.mockImplementationOnce(() =>
            Promise.resolve({
                status: 400,
                data: {
                    error: {
                        code: 7,
                        message: 'some error'
                    }
                }
            })
        );
        editUser()
        expect(Axios.put.mock.calls[1][0]).toBe(`${URL.EDIT}`);

    })
    it('Should catch the error Add Coment', async () => {
        Axios.put.mockImplementationOnce(() =>
            Promise.reject({
                status: 400,
                response: {
                    data: 'error on login actions'
                }

            })
        );
        await editUser()
        expect(errorsHandle).toHaveBeenCalled();
        expect(errorsHandle.mock.calls[0][0]).toEqual('error on login actions')
    })


    // --------------- addPop ----------------------  //

    it('Should Add Comment Actions works with correct call', () => {

        Axios.patch.mockImplementationOnce(() =>
            Promise.resolve({
                status: 200,
                data: [45]
            })
        );
        addPop()
        expect(Axios.patch).toHaveBeenCalled();
        expect(Axios.patch.mock.calls[0][0]).toBe(`${URL.ADD_POP}`);
    })
    it('Should return a bad status', () => {

        Axios.patch.mockImplementationOnce(() =>
            Promise.resolve({
                status: 400,
                data: {
                    error: {
                        code: 7,
                        message: 'some error'
                    }
                }
            })
        );
        addPop()
        expect(Axios.patch.mock.calls[1][0]).toBe(`${URL.ADD_POP}`);

    })
    it('Should catch the error Add Coment', async () => {
        Axios.patch.mockImplementationOnce(() =>
            Promise.reject({
                status: 400,
                response: {
                    data: 'error on login actions'
                }

            })
        );
        await addPop()
        expect(errorsHandle).toHaveBeenCalled();
        expect(errorsHandle.mock.calls[0][0]).toEqual('error on login actions')
    })

    // --------------- addLike ----------------------  //

    it('Should Add Comment Actions works with correct call', () => {

        Axios.patch.mockImplementationOnce(() =>
            Promise.resolve({
                status: 200,
                data: [45]
            })
        );
        addLike()
        expect(Axios.patch).toHaveBeenCalled();
        expect(Axios.patch.mock.calls[3][0]).toBe(`${URL.INFO_COMMENTS}`);
    })
    it('Should return a bad status', () => {

        Axios.patch.mockImplementationOnce(() =>
            Promise.resolve({
                status: 400,
                data: {
                    error: {
                        code: 7,
                        message: 'some error'
                    }
                }
            })
        );
        addLike()
        expect(Axios.patch.mock.calls[4][0]).toBe(`${URL.INFO_COMMENTS}`);

    })
    it('Should catch the error Add Coment', async () => {
        Axios.patch.mockImplementationOnce(() =>
            Promise.reject({
                status: 400,
                response: {
                    data: 'error on login actions'
                }

            })
        );
        await addLike()
        expect(errorsHandle).toHaveBeenCalled();
        expect(errorsHandle.mock.calls[0][0]).toEqual('error on login actions')
    })

})

