import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { finderSearch } from '../../actions/finderActions';
import finderStore from '../../stores/finderStore';
import './finder.css';

function Finder(title, name) {
	const [finder, setFinder] = useState(finderStore.getFinder());

	useEffect(() => {
		finderStore.addChangeListener(onChange);
		if (finder.length === 0) finderSearch();
		return () => finderStore.removeChangeListener(onChange);
	}, [finder.length]);

	function onChange() {
		setFinder(finderStore.getFinder());
	}

	return (
		<>
			<div className="finder">
				{finder.map((element) => {
					return (
						<div key={element.i} className="finder-result">
							<div className="finder-result__name">{element.l}</div>
							<div className="finder-result__type">{element.id}</div>
						</div>
					);
				})}
			</div>
		</>
	);
}

export default Finder;
