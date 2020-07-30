import React from 'react';
import { Route } from 'react-router-dom';

import heroList from './hero.mock';
import Navigation from './component/Navigation';
import Dashboard from './component/Dashboard';
import List from './component/List';
import Details from './component/Details';

class ToH extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hero: heroList[0]
		};
	}

	updateState(newState) {
		this.setState(newState);
	}

	render() {
		return (
			<div>
				<h1>Tour of Heroes</h1>
				<Navigation />
				<Route
					path="/"
					exact
					component={() => <Dashboard list={heroList.slice(0, 4)} />}
				/>
				<Route path="/heroes" component={() => <List list={heroList} />} />
				<Route
					path="/hero/:id"
					component={() => <Details hero={this.state.hero} />}
				/>
			</div>
		);
	}
}

export default ToH;
/*
<Dashboard
	onClickHero={(hero) => {
		this.updateState({ display: 'details', hero });
	}}
/>;

{
	this.state.display === 'list' && (
		<List
			onClickHero={(hero) => {
				this.updateState({ display: 'details', hero });
			}}
		/>
	);
}
{
	this.state.display === 'details' && <Details hero={this.state.hero} />;
}
*/
