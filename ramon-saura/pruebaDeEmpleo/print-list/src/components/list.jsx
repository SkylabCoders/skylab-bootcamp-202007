import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import appStore from '../stores/app-store';
import { loadList } from '../actions/app-actions';

function List() {
	const [list, setList] = useState(appStore.getList());

	useEffect(() => {
		appStore.addChangeListener(onChange);
		if (list.length === 0) loadList();
		return () => appStore.removeChangeListener(onChange);
	}, [list.length]);

	function onChange() {
		setList(appStore.getList());
	}
	return (
		<ul>
			{list.map((component) => (
				<li key={component.api.player}>
					<Link to={`/list/${component.api.player}`}>
						{component.api.player.lastName}, {component.api.player.firstName}
					</Link>
				</li>
			))}
		</ul>
	);
}

export default List;
