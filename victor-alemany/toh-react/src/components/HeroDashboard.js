import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import heroStore from '../stores/heroStore';
import { loadHeroes } from '../actions/heroActions';

function HeroDashboard(props) {
	const [heroes, setHeroes]= useState([])

    useEffect(()=>{
        heroStore.addChangeListener(onChange);
        if(heroes.length === 0) loadHeroes();
        return ()=> heroStore.removeChangeListener(onChange);
    },[heroes.length]);

    function onChange(){
        setHeroes(heroStore.getHeroes());
    }



	let myList = heroes.slice(0, 4);
	let listPromoted = myList.map((hero) => (
		<>
		<div key={hero.id} className="hero-item">
			<NavLink activeClassName='my-active-class' to={`/hero/${hero.id}`}>
				<span className="id-span">{hero.id}</span><span className="name-span">{hero.name}</span>
			</NavLink>
		</div>
		</>
	)
	);
	return (<>
		<div>
				<h1>Top Heroes</h1>
        </div>
		<div className="dashboard-item-container">
			{listPromoted}
		</div> 
	</>
	);
}
export default HeroDashboard;