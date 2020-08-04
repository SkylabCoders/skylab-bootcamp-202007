import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import store from '../../stores/store';
import { loadCharList } from '../../actions/actions';
import './charListComponent.css';

function CharListComponent() {
    const [chars, setChars] = useState(store.getCharacters());

    useEffect(() => {
        store.addChangeListener(onChange);
        if (chars.length === 0) loadCharList();
        return () => store.removeChangeListener(onChange);
    }, [chars.length]);

    function onChange() {
        setChars(store.getCharacters());
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
                                    <h2 className="card-title">{char.name}</h2>
                                </div>

                            </div>
                        </div>
                    </Link>

                ))}</div>

        </>
    );
}


export default CharListComponent;