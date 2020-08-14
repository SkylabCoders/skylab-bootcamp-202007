import React, {useState, useEffect} from 'react';
import './../css/paginatedList.css';
import { Link } from 'react-router-dom';
import HeroStore from './../stores/heroStore';
import { loadPaginatedHeroes } from './../actions/heroActions';
import * as ROUTES from './../config/routes';

function TopHeroes(){
    const [currentHeroes, setHeroes] = useState([]);
    const [page] = useState(0);
    const [itemsPerPage] = useState(5);

    useEffect(()=>{
        HeroStore.addChangeListener(onChange);
        if( currentHeroes.length === 0){ loadPaginatedHeroes(page, itemsPerPage) }
        return ()=>{HeroStore.removeChangeListener(onChange);}
    }, [currentHeroes.length, page, itemsPerPage]);

    function onChange(){
        setHeroes(HeroStore.getPaginatedHeroes(page, itemsPerPage)); 
    }

    return (
        <div className="paginatedList__container">
            <ul>
                {currentHeroes.map((hero)=>(
                    <li key={hero.id}>
                        <Link to={ROUTES.HERO_DETAIL_ROOT + '/' + hero.id}>{hero.id}:{hero.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TopHeroes;