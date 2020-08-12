let __sagas = [];

const store = {
    getSagas() {
        return __sagas;
    },
    _setSagas(sagas) {
        __sagas = sagas;
    },
    addChangeListener(callback) { },
    removeChangeListener(callback) { },
    getSagas() { },
    getSearchValue() {
        return {
            text: ''
        }
    }
}

export default store;