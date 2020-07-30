import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <div className='header'>
            <h1>Tour of Heroes</h1>
            <nav >
                <NavLink activeClassName='my-active-class' to='/' />
                Dashboard
                <NavLink activeClassName='my-active-class' to='/herolsit' />
                HeroList
            </nav>
        </div>
    )
}

export default Header;