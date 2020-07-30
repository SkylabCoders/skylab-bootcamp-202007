import React from 'react';
import './index.css';
import Title from './components/title/title';
import Actions from './components/actions/actions';
import Detail from './components/detail/detail';
import List from './components/list/list';
import heroList from './heroMock';

function App(props) {
	return (
		<div>
			<Title title="Tour of Heroes" />
			<Actions />
			<Detail />
			<List heroes={heroList} />
		</div>
	);
}

export default App;
