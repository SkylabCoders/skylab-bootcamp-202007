import React from 'react';
import { NavLink } from "react-router-dom";

function name(props) {
    return (
        <>
            <h1> Tour of Heroes</h1>
            <nav className="container">
                <NavLink activeClassName="my-active-class" to="/">
                    Dashboard
                </NavLink>
                {'  '}
                <NavLink activeClassName="my-active-class" to="/hero">
                    Heroes
                </NavLink>
                {'  '}
                <NavLink activeClassName="my-active-class" to="/hero/:heroId">
                    Details
                </NavLink>

                {/* També ho podriem fer així <a href="/dashboard">Dashboard</a> | <a href="/hero">Hero</a> */}

            </nav>
        </>
    )
}

export default name;