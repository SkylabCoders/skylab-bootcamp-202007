import React from 'react'
import "./HeroDashboardItem.css"
import { NavLink } from 'react-router-dom';

function HeroDashboardItem({ id, name }) {
    return (
        <ul className="container__dashboard">
            <NavLink activeClassName="active-class" to={`/hero/${id}`}>
                {name}
            </NavLink>
        </ul>
    )
}

export default HeroDashboardItem;