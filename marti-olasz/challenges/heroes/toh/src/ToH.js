import React from 'react';

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
		this.setState(newState);
	}

	render() {
		return (
			<React.StrictMode>
				<Navigation
					onClickDashboard={() => this.updateState({ display: 'dashboard' })}
					onClickList={() => this.updateState({ display: 'list' })}
				/>
				{this.state.display === 'dashboard' && (
					<Dashboard
						onClickHero={(hero) => {
							this.updateState({ display: 'details', hero });
						}}
					/>
				)}
				{this.state.display === 'list' && (
					<List
						onClickHero={(hero) => {
							this.updateState({ display: 'details', hero });
						}}
					/>
				)}
				{this.state.display === 'details' && <Details hero={this.state.hero} />}
			</React.StrictMode>
		);
	}
}

export default ToH;
