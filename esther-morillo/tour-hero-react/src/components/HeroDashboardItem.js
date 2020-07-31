import React from 'react'
import "./heroDashboardItem.css"
import { NavLink } from 'react-router-dom';

function HeroDashboardItem({ id, name }) {
    return (
        <ul className="dashboard__container">
            <NavLink className="dashboard__link" activeClassName="active-class" to={`/hero/${id}`}>
                {name}
            </NavLink>
        </ul>
    )
}

export default HeroDashboardItem;