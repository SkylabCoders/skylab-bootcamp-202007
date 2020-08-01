import React from 'react';
import HeroList from './HeroList';
import Dashboard from '../components/Dashboard';
import Details from '../components/Details';
import heroMock from '../Assets/heroMock';

import { Route, Switch, Redirect } from 'react-router-dom';
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
		<NavLink
			to={`/hero/${hero.id}`}
			key={hero.id}
			className="heroDashboardLink"
		>
			{hero.name}
		</NavLink>
	));
}

function Container() {
	return (
		<div>
			<Switch>
				<Route path="/" exact component={Dashboard} />
				<Route path="/heroes" component={HeroList} />
				<Route path="/hero/:heroId" component={Details} />
			</Switch>
		</div>
	);
}

{
	/* <HeroList renderedHeroes={renderedHeroesList} />
<Dashboard reducedHeroList={renderedHeroesDashboard} />
<Details hero={heroMock[0]} /> */
}

export default Container;
