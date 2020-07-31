import React from 'react';
//import './bootstrap.min.css';
import './App.css';
import HeroDetail from './components/HeroDetail';
import HeroList from './components/HeroList';
import Header from './components/Header';
import HeroDashboard from './components/HeroDashboard';
import { Route } from 'react-router-dom';

function App(props) {
	return (
		<>
			<Header />
			<Route path="/" exact component={HeroDashboard} />
			<Route path="/list" component={HeroList} />
			<Route path="/hero/:heroId" component={HeroDetail} />
		</>
	);
}

export default App;
