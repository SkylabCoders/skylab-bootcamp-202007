import React from 'react';
import heroData from '../heroData';
import './HeroDashboard.css';
import { NavLink } from 'react-router-dom';


function HeroDashboard(props) {

	return (
		<div >
			<h2>Top Heroes</h2>
			{fourHeroes()}
		</div>
	)


}

let four = heroData.slice(0, 4);

const fourHeroes = () => ( //por qué () y no {}???
	<ul className='dashboard'>
		{
			four.map(hero => (
				<NavLink to={`/hero/${hero.id}`} className='dashboard__items' key={hero.id}> {hero.name}</NavLink>
			))

		}
	</ul>
);


export default HeroDashboard;
