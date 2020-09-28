import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Dashboard from './components/Dashboard';
import Detail from './components/Detail';
import Header from "./components/Header";
import Profile from "./components/Profile";
import PageNotFound from "./components/PageNotFound";
import { BrowserRouter as Router } from 'react-router-dom';

function App(props) {
  return (
	<Router>
	<div className="container">
      	<Header />

    	<div className="margin-body">
			
			<Switch>
				<Route path="/" exact component={Dashboard} />
				<Route path="/perfil" component={Profile} />
				<Route path="/:genre" exact component={Dashboard} />
          		<Route path="/alegria" exact component={Dashboard} />
          		<Route path="/amistad" exact component={Dashboard} />
          		<Route path="/amor" exact component={Dashboard} />
          		<Route path="/aniversario" exact component={Dashboard} />
          		<Route path="/desamor" exact component={Dashboard} />
          		<Route path="/haikus" exact component={Dashboard} />
				<Route path="/infantiles" exact component={Dashboard} />
          		<Route path="/tristes" exact component={Dashboard} />
				<Route path="/detalle/:poemId" exact component={Detail} />
				<Route component={PageNotFound} />
			</Switch>
			
		</div>
	</div>
	</Router>
  );
}

export default App;
