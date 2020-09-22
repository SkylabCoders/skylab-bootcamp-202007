import React from 'react';
import HeaderNavbar from './components/Navbar/HeaderNavbar';
import Footer from './components/Footer/Footer';
import Landing from './components/Landing/Landing';
import RepoDetail from './components/RepoDetail/RepoDetail';
import UserDetail from './components/UserDetail/UserDetail';
import AuthComp from './components/AuthComp/AuthComp';
import { Route, Switch } from 'react-router-dom';

function App() {
	return (
		<>
			<HeaderNavbar />
			<Switch>
				<Route path="/" exact component={Landing} />
				<Route path="/userDetail" exact component={UserDetail} />
				<Route path="/repoDetail/:userName/:repoName" component={RepoDetail} />
				<Route path="/userDetail/__/auth/" component={AuthComp} />
			</Switch>
			<Footer />
		</>
	);
}

export default App;
