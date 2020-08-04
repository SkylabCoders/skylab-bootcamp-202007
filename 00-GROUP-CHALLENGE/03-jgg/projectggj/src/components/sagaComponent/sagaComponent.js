import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { loadCharListAPI, loadSagaList } from '../../actions/actions';
import store from "../../stores/store";

function getSagaList() {
    var seriesList = loadSagaList.filter((character) => {
        return character.series
    });

    var uniqueSerieList = [...new Set(seriesList)];

    return uniqueSerieList;
}

function SagaComponent(props) {
    const [sagas, setSagas] = useState(store.getSagas());

    useEffect(() => {
        store.addChangeListener(onChange);
        if (sagas.length === 0) getSagaList();
        return () => store.removeChangeListener(onChange)
    }, [sagas.length]);

    function onChange() {
        setSagas(store.getSagas())
    }


    return (
        <div>
            {sagas}
            <Link to='/charList'>Z</Link>
        </div>

    )
}

export default SagaComponent;