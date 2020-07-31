import React from 'react';
import './MainMenu.css';

class MainMenu extends React.Component{
    constructor(props){
        super(props)
    }

    /* onClick={props.clickDashboard} */
    getMenu(){
        let result = (
            <nav className="nav__menu">
                <ul className="menu__list--horizontal">
                    <li className="menu__item--horizontal"><a href="/dashboard">Dashboard</a></li> 
                    <li className="menu__item--horizontal"><a href="/top-heroes">Top heroes</a></li>
                    <li className="menu__item--horizontal"><a href="/hero-search">Hero search</a></li>
                    <li className="menu__item--horizontal"><a href="/random-hero">Random hero</a></li>
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