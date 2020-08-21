import React from 'react';
import { NavLink, BrowserRouter as Router } from 'react-router-dom';
import './Header-heros.css';


function Header(props) {
    return (
        <div className='header'>
            <h1>Tour of Heroes</h1>
            <Router>
                <nav>
                    <NavLink activeClassName="my-active-class" to="/">
                        Dashboard
				</NavLink>{' '}
                    <NavLink activeClassName="my-active-class" to="/herolist">
                        Heroes List
				</NavLink>

                </nav>
            </Router>
        </div>
    )
}

export default Header;