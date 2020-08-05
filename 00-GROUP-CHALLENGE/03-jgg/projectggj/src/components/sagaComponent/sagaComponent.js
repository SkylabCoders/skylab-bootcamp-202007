import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import store from "../../stores/store";
import { loadSagaList } from '../../actions/actions';
import './sagaComponent.css';


/* function getSagaList() {
    debugger
    var seriesList = loadSagaList();
    seriesList.forEach(char => (char.series))
} */

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
        if (chars.length === 0) loadSagaList();
        return () => store.removeChangeListener(onChange)
        function filterSagas() {
            chars.forEach(char)
        }
    }, [chars.length]);

    function onChange() {
        setSagas(store.getSagas())
    }



    return (
        <>
            <div className='card-holder'>
                {chars.map((char) => (
                    <Link key={char._id} to={`/details/${char.name}`}>
                        <div className="card father-card" >
                            <div className="row no-gutters hinherit">
                                <div className='hinherit img-holder'>

                                    <img src={char.image} className="card-img " alt="..."></img>
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title">{char.series}</h2>
                                </div>

                            </div>
                        </div>
                    </Link>

                ))}</div>
        </>
    )
}

export default SagaComponent;