import React, { useState, useEffect } from 'react';
import { finderSearch } from '../../actions/finderActions';
import finderStore from '../../stores/finderStore';
import './finder.css';
import { Link } from 'react-router-dom';

function Finder(title, name) {
	const [finder, setFinder] = useState(finderStore.getFinder());
	const [imageNotAvailable, setImageNotAvailable] = useState('');

	useEffect(() => {
		finderStore.addChangeListener(onChange);
		if (finder.length === 0) finderSearch();
		return () => finderStore.removeChangeListener(onChange);
	}, [finder.length]);

	function onChange() {
		setImageNotAvailable(
			'https://www.filmaffinity.com/imgs/movies/noimgfull.jpg'
		);
		setFinder(finderStore.getFinder());
	}

	return (
		<div className="finder">
			{finder.map((element) => {
				return (
					<Link
						to={'/film/' + element.id}
						key={element.i}
						className="finder-result"
					>
						<img
							className="finder-result__img"
							src={!element.i ? imageNotAvailable : element.i.imageUrl}
							alt="Search result"
						/>
						<div className="finder-result__details">
							<div className="finder-result__name">{element.l}</div>
							<div className="finder-result__type">{element.s}</div>
							<div className="finder-result__type">
								{isNaN(+element.y) ? null : element.y}
							</div>
						</div>
					</Link>
				);
			})}
		</div>
	);
}

export default Finder;
