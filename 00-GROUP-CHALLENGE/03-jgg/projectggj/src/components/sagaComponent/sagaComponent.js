import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import store from "../../stores/store";
import { loadSagaList } from '../../actions/actions';
import './sagaComponent.css';


function getSagaList() {
    debugger
    var seriesList = loadSagaList();
    seriesList.forEach(char => (char.series))
}

/*     .filter((character) => {
        return character.series
    });

    var uniqueSerieList = [...new Set(seriesList)];

    return uniqueSerieList;
} */

function SagaComponent(props) {
    const [chars, setSagas] = useState(store.getSagas());

    useEffect(() => {
        debugger
        store.addChangeListener(onChange);
        if (chars.length === 0) getSagaList();
        return () => store.removeChangeListener(onChange)
    }, [chars.length]);

    function onChange() {
        setSagas(store.getSagas())
    }


    return (
        <>
            <div className='card-holder'>
                {chars}
            </div>
        </>
    )
}

export default SagaComponent;