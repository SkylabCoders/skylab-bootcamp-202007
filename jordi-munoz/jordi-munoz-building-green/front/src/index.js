import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'fontsource-roboto';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { Auth0Provider } from "@auth0/auth0-react";
import { domain, clientId, audience, scope } from '../src/auth0/auth0';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={`${window.location.origin}/profile`}
      audience={audience}
      scope={scope}
      useRefreshTokens={true}
    >
      <Router>
        <App />
      </Router>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
