import React, {useState, useEffect} from 'react';
import './../css/paginatedList.css';
import { Link, useRouteMatch } from 'react-router-dom';
import HeroStore from './../stores/heroStore';
import { loadPaginatedHeroes } from './../actions/heroActions';
import * as ROUTES from './../config/routes';
import * as PARAMS from './../config/appParameters';

function PaginatedList(){

    let urlQuery = useRouteMatch()
    let urlPage = +urlQuery.params.currentPage;
    if(urlPage === undefined){urlPage = 0;}
    const [currentHeroes, setHeroes] = useState([]);
    const [page] = useState(urlPage);
    const [itemsPerPage] = useState(PARAMS.ITEMS_PER_PAGE);

    useEffect(()=>{
        HeroStore.addChangeListener(onChange);
        if( currentHeroes.length === 0 ){ loadPaginatedHeroes(page, itemsPerPage) }
        return ()=>{HeroStore.removeChangeListener(onChange);}
    }, [currentHeroes, page, itemsPerPage]);

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
            <Link to={ROUTES.HERO_LIST_PAGINATED_ROOT + '/' + (page - 1)}>Previous Page</Link><Link to={ROUTES.HERO_LIST_PAGINATED_ROOT + '/' + (page + 1)}>Next Page</Link>
        </div>
    );
}

export default PaginatedList;