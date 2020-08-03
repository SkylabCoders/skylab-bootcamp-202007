import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import store from '../../stores/store';
import { loadCharList } from '../../actions/actions';

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
            <ul>

                {chars.map((char) => (
                    <li key={char._id}>
                        <img src={char.image} alt='' width={'50'}></img>
                        <Link to={`/details/${char.name}`}>
                            {char._id}: {char.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}


export default CharListComponent;