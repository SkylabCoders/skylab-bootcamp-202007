import React from 'react';
import './../css/mainMenu.css';
import { NavLink } from 'react-router-dom';
import * as ROUTES from './../config/routes';

class MainMenu extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            random: Math.floor(Math.random()*563)
        }
    }

    getMenu(){
        let result = (
            <nav className="nav__menu">
                <ul className="menu__list--horizontal">
                    <li className="menu__item--horizontal"><NavLink to={ROUTES.HOME}>Hero list</NavLink></li> 
                    <li className="menu__item--horizontal"><NavLink to={ROUTES.TOP_HEROES}>Top 5 heroes</NavLink></li>
                    <li className="menu__item--horizontal"><NavLink to={ROUTES.HERO_LIST_FULL}>Full list</NavLink></li>
                    <li className="menu__item--horizontal"><NavLink to={ROUTES.HERO_SEARCH}>Hero search</NavLink></li>
                    <li className="menu__item--horizontal"><NavLink to={ROUTES.HERO_DETAIL_SOME + this.state.random}>Random hero</NavLink></li>
                </ul>
            </nav>
        );
        return result;
    }

    render(){
        return this.getMenu();
    }
}

export default MainMenu;