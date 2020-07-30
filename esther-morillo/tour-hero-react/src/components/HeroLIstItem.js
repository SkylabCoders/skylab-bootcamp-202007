import React from 'react';
import './HeroListItem.css'
import { NavLink } from 'react-router-dom';

function HeroListItem({ id, name }) {
	return (
		<ul className="hero__list">
			<NavLink  activeClassName="active-class" to={`/hero/${id}`}>
			<span>{id}</span><span>{name}</span>
			</NavLink>
		</ul>
	)
}

export default HeroListItem;
