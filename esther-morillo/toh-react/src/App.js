import React from 'react';
import './App.css';
import HeroDetail from './components/HeroDetail';
import Header from './components/Header';
import HeroDashboard from './components/HeroDashboard';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import HeroesPage from './components/HeroesPage';
import Login from './components/Login'


function App(props) {
	return (
		<div className="container">
			<Header />
			<Switch>
				<Route path="/" exact component={HeroDashboard} />
				<Route path="/hero/:heroId" component={HeroDetail} />
				<Route path="/hero" component={HeroDetail} />
				{/* Al utilizar browser router ya tienes props por defecto como el params, por ejemplo, or eso hay que pasar props por parámetro y luego podemos usar rops.match.params.heroId */}
				<Route path="/heroes" component={HeroesPage} />
				{/* Creamos la ruta para el login */}
				<Route path="/login" component={Login} />
				<Route component={PageNotFound} />
			</Switch>
		</div>
	);
}

export default App;
