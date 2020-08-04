import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import store from '../../stores/store';
import { loadPlanets } from "../../actions/actions";

function PlanetComponent(prop) {
    const [planets, setPlanets] = useState(store.getPlanets());

    useEffect(() => {
        store.addChangeListener(onChange);
        if (planets.length === 0) loadPlanets();
        return () => store.removeChangeListener(onChange);
    }, [planets.length]);

    function onChange() {
        setPlanets(store.getPlanets());
    }

    return (

        <div>
            {planets && planets.map((planet) => (

                <Link to='/charList'>{planet.name}</Link>

            ))}

        </div>

    );
}

export default PlanetComponent;