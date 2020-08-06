import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import Finder from './components/finder/finder';
import Login from './components/login/login';
import Film from './components/film/film';
import PrivacyPolicy from './components/footer/footer-privacyPolicy';
import AboutUs from './components/footer/footer-about';

function App() {
	return (
		<>
			<Header />
			<Route path="/" exact component={Home} />
			<Route path="/login" component={Login} />
			<Route path="/film" component={Film} />
			<Route path="/finder/:id" component={Finder} />
			<Route path="/privacy" component={PrivacyPolicy} />
			<Route path="/about" component={AboutUs} />
			<Footer />
		</>
	);
}

export default App;
