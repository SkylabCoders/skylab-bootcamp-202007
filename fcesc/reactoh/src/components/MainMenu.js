import React, { useState } from 'react';
import './../css/mainMenu.css';
import { NavLink } from 'react-router-dom';
import * as ROUTES from './../config/routes';

function MainMenu(){
    const [randomHero] = useState(Math.floor(Math.random()*563));
    return (
        <nav className="nav__menu">
            <ul className="menu__list--horizontal">
                <li className="menu__item--horizontal"><NavLink to={ROUTES.HERO_LIST_PAGINATED_FIRST}>Hero list</NavLink></li> 
                <li className="menu__item--horizontal"><NavLink to={ROUTES.TOP_HEROES}>Top 5 heroes</NavLink></li>
                <li className="menu__item--horizontal"><NavLink to={ROUTES.HERO_LIST_FULL}>Full list</NavLink></li>
                <li className="menu__item--horizontal"><NavLink to={ROUTES.HERO_SEARCH}>Hero search</NavLink></li>
                <li className="menu__item--horizontal"><NavLink to={ROUTES.HERO_DETAIL_SOME + randomHero}>Random hero</NavLink></li>
            </ul>
        </nav>
    );
}

export default MainMenu;