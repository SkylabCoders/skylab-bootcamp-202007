import React from 'react';
import './App.css';
import HeroDetail from './components/HeroDetail';
import Header from './components/Header';
import HeroDashboard from './components/HeroDashboard';
import HeroList from './components/HeroList';
import { Route } from 'react-router-dom';
import heroListItem from './hero.mock';

function App(props) {
	return (
		<main className = "main-container">
			<Header />
			<Route path="/" exact component={()=><HeroDashboard heroes={heroListItem}/>}/>
			<Route path="/hero" exact component={()=><HeroList heroes={heroListItem}/>}/>
			<Route path="/hero/:heroId" component={HeroDetail} />
			
		</main>
	);
}

export default App;