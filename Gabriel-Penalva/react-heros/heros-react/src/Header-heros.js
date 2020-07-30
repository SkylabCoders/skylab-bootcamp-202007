import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header-heros.css';

function Header(props) {
    return (
        <div className='header'>
            <h1>Tour of Heroes</h1>

            <nav>
                <NavLink activeClassName="my-active-class" to="/">
                    Dashboard
				</NavLink>{' '}
                <NavLink activeClassName="my-active-class" to="/herolist">
                    Heroes List
				</NavLink>

            </nav>

        </div>
    )
}

export default Header;