import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Container from './components/Container';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode >
        <Router>
            <Header />
            <Container />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();