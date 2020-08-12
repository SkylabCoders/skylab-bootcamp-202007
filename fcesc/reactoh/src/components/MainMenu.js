import React from 'react';
import './MainMenu.css';
import { NavLink } from 'react-router-dom';

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
                    <li className="menu__item--horizontal"><NavLink to="/">Hero list</NavLink></li> 
                    <li className="menu__item--horizontal"><NavLink to="/top-heroes">Top 5 heroes</NavLink></li>
                    <li className="menu__item--horizontal"><NavLink to="/full-flux">Full list</NavLink></li>
                    <li className="menu__item--horizontal"><NavLink to="/hero-search">Hero search</NavLink></li>
                    <li className="menu__item--horizontal"><NavLink to={'/hero/?heroId=' + this.state.random}>Random hero</NavLink></li>
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