import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import heroList from './hero.mock';
import Navigation from './component/Navigation';
import Dashboard from './component/Dashboard';
import List from './component/List';
import Details from './component/Details';

class ToH extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			display: 'dashboard',
			hero: heroList[0]
		};
	}

	updateState(newState) {
		this.state.display = newState;
		this.render();
	}

	sendHero(newHero) {
		this.state.hero = newHero;
	}

	render() {
		return ReactDOM.render(
			<React.StrictMode>
				<Navigation
					onClickDashboard={() => this.updateState('dashboard')}
					onClickList={() => this.updateState('list')}
				/>
				{this.state.display === 'dashboard' && (
					<Dashboard
						onClickHero={(hero) => {
							this.sendHero(hero);
							this.updateState('details');
						}}
					/>
				)}
				{this.state.display === 'list' && (
					<List
						onClickHero={(hero) => {
							this.sendHero(hero);
							this.updateState('details');
						}}
					/>
				)}
				{this.state.display === 'details' && <Details hero={this.state.hero} />}
			</React.StrictMode>,
			document.getElementById('root')
		);
	}
}
const toh = new ToH();
toh.render();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
