import React from 'react';
import './App.css';
import HeroDetail from './components/HeroDetail';
import HeroList from './components/HeroList';
import Header from './components/Header';
import HeroDashboard from './components/HeroDashboard';
import { Route } from 'react-router-dom';

function App() {
	return (
		<div className="lightbox">
			<Header />
			<Route path="/" exact component={HeroDashboard} />
			<Route path="/heroes" component={HeroList} />
			<Route path="/hero/:heroId" component={HeroDetail} />
		</div>
	);
}

export default App;
