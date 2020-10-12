import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
    <>
        <Auth0Provider
            domain="dev-c4zbp1jz.eu.auth0.com"
            clientId="Rxx1GB620hG6xtfuEl7jrxDVTGLw0suU"
            redirectUri={'http://localhost:3000/auth/profile'}
        >
            <Router>
                <App />
            </Router>
        </Auth0Provider>
    </>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
