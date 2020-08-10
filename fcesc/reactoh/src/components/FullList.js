import React, {useState, useEffect} from 'react';
import './../css/paginatedList.css';
import { Link } from 'react-router-dom';
import HeroStore from './../stores/heroStore';
import { loadHeroes } from './../actions/heroActions';
import HERO_LIST from './../superHeroData';
import * as ROUTES from './../config/routes';

function FullList(){
    const [heroes, setHeroes] = useState(HERO_LIST); // hook per guardar la variable heroes al state del component

    useEffect(()=>{
        HeroStore.addChangeListener(onChange);
        if( heroes.length === 0){ loadHeroes() }
        // el return del useEffect ejecuta una acción
        return ()=>{HeroStore.removeChangeListener(onChange);}
    }, [heroes.length]);

    function onChange(){
        setHeroes(HeroStore.getHeroes());  // setter del hook
    }

    return (
        <div className="paginatedList__container">
            <ul>
                {heroes.map(hero=>
                    <li key={hero.id}>
                        <Link to={ROUTES.HERO_DETAIL_ROOT + '/' + hero.id}>{hero.id}:{hero.name}</Link>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default FullList;