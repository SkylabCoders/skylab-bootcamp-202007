import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import * as serviceWorker from './serviceWorker';
import Dashboard from './components/Dashboard';
import List from './components/List';
import Details from './components/Details';

const heroList = [
  { id: 11, name: 'Dr Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

let heroesFilter;

function filterHeroes(heroList) {
  heroesFilter = heroList.slice(0, 4);
  return heroesFilter;
}
filterHeroes(heroList);

function renderHeroList(heroes) {
  let elements = heroes.map(function (hero) {
    return <p key={hero.name}>{hero.name}</p>
  });
  return elements;
}


ReactDOM.render(
  <React.StrictMode>
    <Header 
      clickDash={() => {}}
    />
    <Dashboard
      heroesList={renderHeroList(heroesFilter)}
    />
    <List 
      heroesList={renderHeroList(heroList)}
    />
    <Details 
    
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
