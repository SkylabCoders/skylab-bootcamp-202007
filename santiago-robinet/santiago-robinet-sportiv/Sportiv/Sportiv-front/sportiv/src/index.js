import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Auth0Provider } from "@auth0/auth0-react";


ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
    domain={"dev-miu5kfur.eu.auth0.com"}
    clientId={"2zCZDhp3DkFqbHhgO8NxTMtPk65axe6S"}
    audience= {'http://sportiv.api.com'}
    redirectUri={"http://localhost:3000/profile"}
  >
    <App />

  </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
