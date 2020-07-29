import React from 'react';

import Dashboard from './Dashboard';
import List from './List';
import Details from './Details';

function Navigation() {
	return (
		<div>
			<h1>Tour of Heroes</h1>
			<div className="buttons">
				<button>Dasbord</button>
				<button>Heroes</button>
			</div>
			<Dashboard />
			<List />
			<Details />
		</div>
	);
}

export default Navigation;
