import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import store from '../../stores/store';
import { loadPlanets } from '../../actions/actions';

function PlanetComponent(prop) {
	const [planets, setPlanets] = useState(store.getPlanets());

	useEffect(() => {
		store.addChangeListener(onChange);
		if (planets.length === 0) loadPlanets();
		return () => store.removeChangeListener(onChange);
	}, [planets.length]);

	function onChange() {
		if (store.getSearchValue()) {
			setPlanets(store.getPlanetsFiltered());
		} else {
			setPlanets(store.getPlanets());
		}
	}

	return (
		<div className="card-holder">
			{planets &&
				planets.map((planet) => (
					<Link to={`/charList/planet/${planet.name}`} key={planet.__v}>
						<div className="card father-card">
							<div className="row no-gutters hinherit">
								<div className="hinherit img-holder">
									<img src={planet.image} className="card-img " alt="..."></img>
								</div>
								<div className="card-body">
									<h2 className="card-title">{planet.name}</h2>
								</div>
							</div>
						</div>
					</Link>
				))}
		</div>
	);
}

export default PlanetComponent;
