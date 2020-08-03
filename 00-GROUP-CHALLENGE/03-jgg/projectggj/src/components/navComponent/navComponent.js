import React, { useState } from 'react';
import './navComponent.css';
import { NavLink } from 'react-router-dom';

function NavComponent(props) {
    const [searchValue, setSearchValue] = useState();

    function onFieldChange(myEvent) {
        setSearchValue({
            [myEvent.target.name]: myEvent.target.value
        });
    }

    return (

        <header className='container'>
            <nav className='navbar navbar-dark bg-dark'>

                <NavLink
                    className='btn btn-warning'
                    to='/' activeClassName='nav--active'>
                    Home
                        </NavLink>
                {' '}
                <NavLink
                    className='btn btn-warning'
                    to='/planet' activeClassName='nav--active'>
                    Planets
                        </NavLink>{' '}
                <NavLink
                    className='btn btn-warning'
                    to='/saga' activeClassName='nav--active'>
                    Sagas
                        </NavLink>{' '}
                <input
                    name='search'
                    type='text'
                    placeholder='Dragon search...'
                    value={searchValue}
                    onChange={onFieldChange}
                />
            </nav>
        </header>

    );
}

export default NavComponent;

