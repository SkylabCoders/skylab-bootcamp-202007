import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.min.css';
import HeroDashboard from './components/HeroDasboard';
import * as serviceWorker from './serviceWorker';
import HeroList from './components/HeroList';

function changeView({ newView }) {
  newView = <HeroDashboard /> || newView
}

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <div className="container">
        <h1>Tour of Heroes</h1>
        <button /* onClick={dashboard} */>Dashboard</button>
        <button /* onClick={list} */>Heroes</button>
      </div>
      < HeroDashboard />
      <HeroList />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
