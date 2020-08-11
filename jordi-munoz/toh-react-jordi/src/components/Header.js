import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <>
        <h1 className='fix-header__title'>Tour of Heroes</h1>
        <nav className='fix-header__buttons'>
            <NavLink className='fix-header__buttons-each' activeClassName='my-active-class' to='/'>
            Dashboard
            </NavLink>{' '}
            <NavLink className='fix-header__buttons-each' activeClassName='my-active-class' to='/heroes'>
            Heroes
            </NavLink>{' '}
            <NavLink className='fix-header__buttons-each' activeClassName='my-active-class' to='/hero/14'>
            Details
            </NavLink>
        </nav>
        </>
    );

}

export default Header;