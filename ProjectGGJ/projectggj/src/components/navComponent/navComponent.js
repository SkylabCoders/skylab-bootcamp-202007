import React from 'react';
import './navComponent.css';
import { NavLink } from 'react-router-dom';

function NavComponent(props) {
    return (
        <>
            <h2>Goku World</h2>
            <nav>
                <NavLink to='/' activeClassName='nav--active'>
                    Home</NavLink>{' '}
                <NavLink to='/planet' activeClassName='nav--active'>
                    Planets</NavLink>{' '}
                <NavLink to='/saga' activeClassName='nav--active'>
                    Sagas</NavLink>{' '}
                {/* <input type='text' placeholder='Dragon search...'>Search</input> */}
            </nav>
        </>
    );
}

export default NavComponent;

