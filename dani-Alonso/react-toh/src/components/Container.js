import React, { useLayoutEffect } from 'react';
import heroMock from '../Assets/heroMock';
import List from '../components/List';
import Dashboard from '../components/Dasboard';
import Detail from '../components/Detail';

let renderedHeroesList;
let renderedHeroesDashboard;


renderedHeroesList = renderHeroes(heroMock);

const reducedMock = heroMock.slice(0, 4)
renderedHeroesDashboard = renderHeroes(reducedMock)

function renderHeroes(heroList) {
    return heroList.map((hero) =>
        <li key={hero.id}>{hero.id} {hero.name}</li>
    )
}

function Container() {

    return (
        <div>
            <List renderedHeroes={renderedHeroesList} />
            <Dashboard reducedHeroList={renderedHeroesDashboard} />
            <Detail hero={heroMock[0]} />
        </div >
    )
}

export default Container;