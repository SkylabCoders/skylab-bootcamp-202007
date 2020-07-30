import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './DashBoard';
import * as serviceWorker from './serviceWorker';
import HeroList from './HeroList';
import Header from './Header-heros.js';
import DashBoard from './DashBoard.js';
import Details from './Details.js';
import heroList from './hero.mock.js';

let heros = heroList;



renderDetails();
function renderDashBoard() {
  ReactDOM.render(
    <React.StrictMode>
      <Header
        renderList={renderList}
        renderDashboard={renderDashBoard} />
      <DashBoard
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
function renderDetails() {
  ReactDOM.render(
    <React.StrictMode>
      <Header
        renderList={renderList}
        renderDashboard={renderDashBoard} />
      <Details
        renderDashboard={renderDashBoard} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}



function renderList() {
  ReactDOM.render(
    <React.StrictMode>
      <Header
        renderList={renderList}
        renderDashboard={renderDashBoard} />
      <HeroList
        list={heroList}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
