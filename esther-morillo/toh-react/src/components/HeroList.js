import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import heroStore from '../stores/heroStore';
import { loadHeroes, deleteHero } from '../actions/heroActions';
import './HeroList.css';

function HeroList() {
	const [heroes, setHeroes] = useState(heroStore.getHeroes());

	useEffect(() => {
		//escucha, cuando haya un cambio en el store ejecuta, pero no la ejecuto de primeras (y me lleva a la función)
		heroStore.addChangeListener(onChange);
		//cada vez que entre aquí hace una petición para actulizar la lista de hérores. Aquí es cuando entro y solo si la lista está vacía (que será porque no hemos hecho la petición)
		if (heroes.length === 0) loadHeroes();
		return () => heroStore.removeChangeListener(onChange);
	}, [heroes.length]);

	function onChange() {
		setHeroes(heroStore.getHeroes()); //está en el store, retorna la lista 
	}

	function onDelete(event, heroId) {
		event.preventDefault();
		//Lo único que hace es borrar desde otra función que está en el ACTIONS
		deleteHero(heroId);
	}

	return (
		<ul>
			{heroes.map((hero) => (
				<li key={hero.id} className="hero-list__item">
					<Link to={`/hero/${hero.id}`}>
						{hero.id}: {hero.name}
					</Link>

					{/* Agregamos botón y llamamos a una función */}
					<div className="hero-list__item--delete">
						<button onClick={(event) => onDelete(event, hero.id)}>X</button>
					</div>
				</li>
			))}
		</ul>
	);
}

export default HeroList;
