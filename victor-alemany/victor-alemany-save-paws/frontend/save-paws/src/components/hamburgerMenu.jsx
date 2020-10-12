import React from 'react';
import '../css/hamburgerMenu.scss';
import { NavLink } from 'react-router-dom';

function HamburgerMenu (props){
    return (
        <div className="hamburger__menu">
                    <input
                        type="checkbox"
                        className="openSidebarMenu"
                        id="openSidebarMenu"
                    />
                    <label
                        htmlFor="openSidebarMenu"
                        className="sidebarIconToggle"
                    >
                        <div className="spinner diagonal part-1"></div>
                        <div className="spinner horizontal"></div>
                        <div className="spinner diagonal part-2"></div>
                    </label>
                    <div id="sidebarMenu">
                        <ul className="sidebarMenuInner">
                        <NavLink
                                    to="/"
                                    exact
                                    activeClassName="nav__link--active"
                                >
                            <li className="item__menu">
                                
                                    Home
                               
                            </li>
                            </NavLink>
                            <NavLink
                                    to="/categories"
                                    exact
                                    activeClassName="nav__link--active"
                                >
                            <li className="item__menu"> 
                                
                                    By categories
                                
                            </li>
                            </NavLink>
                            <NavLink
                                    to="/alerts"
                                    activeClassName="nav__link--active"
                                >
                            <li className="item__menu">
                                
                                    Show list
                                
                            </li>
                            </NavLink>
                         
                            <NavLink
                                to={`/user/alerts/${props.userLoaded}`}
                                activeClassName="nav__link--active"
                            >
                                <li className="item__menu"> My alerts</li>
                            </NavLink>
                            <NavLink
                                    to=""
                                >
                            <li className="item__menu">
                                
                                    About
                                
                            </li>
                            </NavLink>
                            <NavLink
                                    to=""
                                >
                            <li className="item__menu">
                                
                                    Contact
                                
                            </li>
                            </NavLink>
                        </ul>
                    </div>
                </div>
    );
}

export default HamburgerMenu;