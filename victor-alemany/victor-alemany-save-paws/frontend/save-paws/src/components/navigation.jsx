import React from 'react';
import '../css/navigation.scss';
import { NavLink } from 'react-router-dom';

function Navigation(props){

    return (
        <div className="navigation__container">
        <nav className="navigation">
                    <NavLink to="/" exact activeClassName="nav__link--active">
                        Home
                    </NavLink>

                    <NavLink
                        to="/categories"
                        exact
                        activeClassName="nav__link--active"
                    >
                        By categories
                    </NavLink>

                    <NavLink to="/alerts" activeClassName="nav__link--active">
                        Show list
                    </NavLink>
                    {props.userLoaded && (
                    <NavLink
                        to={`/user/alerts/${props.userLoaded}`}
                        activeClassName="nav__link--active"
                    >
                        My alerts
                    </NavLink>)}

                    <NavLink to="">
                        About
                    </NavLink>

                    <NavLink to="">
                        Contact
                    </NavLink>
                </nav>
                </div>
    )
}

export default Navigation;