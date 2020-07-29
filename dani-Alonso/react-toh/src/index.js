import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Container from './components/Container';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode >
        <Header />
        <Container />
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();