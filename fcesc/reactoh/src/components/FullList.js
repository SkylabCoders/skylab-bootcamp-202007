import React, {useState, useEffect} from 'react';
import './../css/paginatedList.css';
import { Link } from 'react-router-dom';
import HeroStore from './../stores/heroStore';
import { loadHeroes, deleteHeroById } from './../actions/heroActions';
import * as ROUTES from './../config/routes';

function FullList(){
    const [heroes, setHeroes] = useState(HeroStore.getHeroes()); 

    useEffect(()=>{
        HeroStore.addChangeListener(onChange);
        if( heroes.length === 0){ loadHeroes() }
        return ()=>{HeroStore.removeChangeListener(onChange);}
    }, [heroes.length]);

    function onChange(){
        setHeroes(HeroStore.getHeroes()); 
    }

    function deleteHero(event, _id){
        event.preventDefault();
        deleteHeroById(_id);
    }
    
    return (
        <div className="paginatedList__container">
            <ul>
                {heroes.map(hero=>
                    <li key={hero.id}>
                        <Link to={ROUTES.HERO_DETAIL_ROOT + '/' + hero._id}>{hero.id}: {hero.name}</Link><button onClick={(event)=>deleteHero(event, hero._id)}>X</button>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default FullList;