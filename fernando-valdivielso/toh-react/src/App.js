import React from 'react';
import './App.css';
import HeroDetail from './components/HeroDetail';
import Header from './components/Header';
import HeroDashboard from './components/HeroDashboard';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import HeroesPage from './components/HeroesPage';
import HeroList from './components/HeroList'

function App(props) {
	return (

		<div className="container">
			<BrowserRouter>
				<Header />
				<Switch>
					<Route path="/" exact component={HeroDashboard} />
					<Route path="/hero/:heroId" component={HeroDetail} />
					<Route path="/hero" exact component={HeroList} />
					<Route path="/heroes" component={HeroesPage} />
					<Route component={PageNotFound} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;




// import React from 'react';
// import './App.css';
// import HeroDetail from './components/HeroDetail';
// import HeroList from './components/HeroList';
// import Header from './components/Header';
// import HeroDashboard from './components/HeroDashboard';
// import { Route, Switch } from 'react-router-dom';

// function App(props) {
// 	return (
// 		<div>
// 			<Header />
// 			<Switch>

// 				<Route path="/" exact component={HeroDashboard} />
// 				<Route path="/hero/:heroId" component={HeroDetail} />

// 				<Route path="/hero" component={HeroList} />

// 			</Switch>
// 		</div>
// 	);
// }

// export default App;
