import React from 'react';
import ReactDOM from 'react-dom';
import heroMock from '../Assets/heroMock';
import HeroList from '../components/HeroList';
import Dashboard from '../components/Dashboard';
import Details from '../components/Details';
import { render } from '@testing-library/react';

let renderedHeroesList;
let renderedHeroesDashboard;
let heroIdShow;

renderedHeroesList = renderHeroes(heroMock);

const reducedMock = heroMock.slice(0, 4);
renderedHeroesDashboard = renderHeroes(reducedMock);

function getHeroById(e) {
	heroIdShow = e.currentTarget.dataset.id;
	renderContainer();
}

function renderContainer() {
	ReactDOM.render(
		<React.StrictMode>
			<div>
				<HeroList renderedHeroes={renderedHeroesList} />
				<Dashboard reducedHeroList={renderedHeroesDashboard} />
				<Details hero={heroMock[heroIdShow]} />
			</div>
		</React.StrictMode>
	);
}

function renderHeroes(heroList) {
	return renderContainer();

	// return heroList.map((hero) => (
	// 	<li key={hero.id} onClick={getHeroById.bind(this)} data-id={hero.id}>
	// 		{hero.id} {hero.name}
	// 	</li>
	// ));
}

function Container() {
	return (
		<div>
			<HeroList renderedHeroes={renderedHeroesList} />
			<Dashboard reducedHeroList={renderedHeroesDashboard} />
			<Details hero={heroMock[0]} />
		</div>
	);
}

export default Container;
