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
                    <Link to={`/details/${char.name}`}>
                        <div class="card mb-3" >
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                    <img src={char.image} class="card-img" alt="..."></img>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">{char.name}</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    // <li key={char._id}>
                    //     <Link to={`/details/${char.name}`}>
                    //         <img src={char.image} alt='' width={'50'}></img>
                    //         {char._id}: {char.name}
                    //     </Link>
                    // </li>
                ))}
            </ul>
        </>
    );
}


export default CharListComponent;