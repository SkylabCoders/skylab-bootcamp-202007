import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Header from './components/Header';
import Footer from './components/Footer';
import MainMenu from './components/MainMenu';
import * as serviceWorker from './serviceWorker';


const title = 'hola pepsicola';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <MainMenu />
    <App 
      click={(arg)=>{console.log(arg)}}
      title={title}
    />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
