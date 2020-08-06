import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import Finder from './components/finder/finder';
import Login from './components/login/login';
import User from './components/user/user';
import Name from './components/name/name';
import Film from './components/film/film';
import PrivacyPolicy from './components/footer/footer-privacyPolicy';
import AboutUs from './components/footer/footer-about';

function App() {
	return (
		<>
			<div className="margin-bottom">
				<Header />
				<Route path="/" exact component={Home} />
				<Route path="/login" component={Login} />
				<Route path="/film" component={Film} />
				<Route path="/name" component={Name} />
				<Route path="/user" component={User} />
				<Route path="/finder/:id" component={Finder} />
				<Route path="/privacy" component={PrivacyPolicy} />
				<Route path="/about" component={AboutUs} />
			</div>
			<Footer />
		</>
	);
}

export default App;
