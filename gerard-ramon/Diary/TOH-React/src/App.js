import React from 'react';
import Header from './components/Header';
import Container from './components/Container';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
	return (
		<>
			<Router>
				<Header />
				<Container />
			</Router>
		</>
	);
}

export default App;
