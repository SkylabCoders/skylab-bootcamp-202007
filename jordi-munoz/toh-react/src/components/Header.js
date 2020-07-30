import React from 'react';
import './Header.css';
import {navLink, NavLink} from 'react-router-dom';

function Header(props) {
    return (
        <>
        <h1>Tour of Heroes</h1>
        <nav>
            <NavLink active>
            Dashboard
            </NavLink>
        </nav>
        </>
    );

}

export default Header;