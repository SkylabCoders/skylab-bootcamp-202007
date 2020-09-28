import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { Auth0Provider } from "@auth0/auth0-react";


ReactDOM.render(
  <React.StrictMode>
    <Router>
       <Auth0Provider
    domain="dev-kpid04y3.eu.auth0.com"
    clientId="A9LJVea7ss5WV8pjbW1505492DGyqosI"
    redirectUri={'http://localhost:3000/perfil'}
    >
			<App />
    </Auth0Provider>
		</Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
