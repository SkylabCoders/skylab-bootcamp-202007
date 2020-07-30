import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TohTitle from './components/TohTitle';
import * as serviceWorker from './serviceWorker';
import TohDashboard from './components/TohDashboard';
import TohList from './components/TohList'
import TohDetails from './components/TohDetails'


ReactDOM.render(
  <React.StrictMode>

    <TohTitle />
    <TohDashboard />
    <TohList />
    <TohDetails />
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
