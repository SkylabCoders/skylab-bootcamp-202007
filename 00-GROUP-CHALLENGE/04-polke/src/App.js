import React from 'react';
import HeaderNavbar from './components/Navbar/HeaderNabvar';
import Footer from './components/Footer/Footer';
import Landing from './components/Landing/Landing';
import RepoDetail from './components/RepoDetail/RepoDetai';
import UserDetail from './components/UserDetail/UserDetail';
import { Route, Switch } from 'react-router-dom';

function App() {
	return (
		<>
			<HeaderNavbar />
			<Switch>
				<Route path="/" exact component={Landing} />
				<Route path="/userDetail" component={UserDetail} />
				<Route path="/repoDetail" component={RepoDetail} />
			</Switch>
			<Footer />
		</>
	);
}

export default App;
