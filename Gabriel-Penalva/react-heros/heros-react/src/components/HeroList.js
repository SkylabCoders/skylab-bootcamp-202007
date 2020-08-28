import React, { useState, useEffect } from 'react';
import './HeroList.css'
import heroStore from '../stores/heroStore';
import { loadHeros } from '../actions/heroActions';

function HeroList() {
    const [heros, setHeros] = useState([]);

    useEffect(() => {
        heroStore.addChangeListener(onChange);
        if (heros.length === 0) {
            loadHeros();
        }
        return () => heroStore.removeChangeListener(onChange);
    }, [heros.length]);

    function onChange() {
        setHeros(heroStore.getHeroes())
    }
    return (
        <div>
            <ul className='heroes'>
                <h3>List of Heros</h3>
                {heros.map((hero) => (
                    <li key={hero.id}><a href={`/id/${hero.id}`}
                        className="hero-list_item"><span className="badge ">{hero.id}</span> {hero.name}</a></li>
                ))}
            </ul>
        </div>)
}




export default HeroList;