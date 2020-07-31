import React, { useLayoutEffect } from 'react';
import List from './List';
import Dashboard from '../components/Dasboard';
import Detail from '../components/Detail';
import { Route } from 'react-router-dom';
import heroMock from '../Assets/heroMock';
import { NavLink } from 'react-router-dom';

let renderedHeroesDashboard;
const reducedMock = heroMock.slice(0, 4);
renderedHeroesDashboard = renderHeroesDashboard(reducedMock);

let renderedHeroesList = renderHeroes(heroMock);
function renderHeroes(heroList) {
	return heroList.map((hero) => (
		<NavLink to={`/hero/${hero.id}`} key={hero.id} className="heroListLink">
			<span className="heroId">{hero.id}</span> {hero.name}
		</NavLink>
	));
}
function renderHeroesDashboard(heroList) {
	return heroList.map((hero) => (
		<NavLink to={`/hero/${hero.id}`} key={hero.id} className="heroDasboardLink">
			{hero.name}
		</NavLink>
	));
}
function Container() {
	return (
		<div>
			<Route
				path="/"
				exact
				component={() => (
					<Dashboard reducedHeroList={renderedHeroesDashboard} />
				)}
			/>
			<Route
				path="/heroes"
				component={() => <List heroList={renderedHeroesList} />}
			/>
			<Route path="/hero/:heroId" component={Detail} />
		</div>
	);
}

export default Container;
