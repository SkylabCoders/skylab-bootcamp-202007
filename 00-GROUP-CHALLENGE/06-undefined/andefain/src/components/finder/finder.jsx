import React, { useState, useEffect } from 'react';
import { finderSearch } from '../../actions/finderActions';
import finderStore from '../../stores/finderStore';
import './finder.scss';
import { Link } from 'react-router-dom';

function Finder(title, name) {
	const [finder, setFinder] = useState(finderStore.getFinder());
	const [imageNotAvailable, setImageNotAvailable] = useState('');

	useEffect(() => {
		finderStore.addChangeListener(onChange);
		if (finder.length === 0) finderSearch();
		return () => finderStore.removeChangeListener(onChange);
	}, []);

	function onChange() {
		setImageNotAvailable(
			'https://www.filmaffinity.com/imgs/movies/noimgfull.jpg'
		);
		setFinder(finderStore.getFinder());
	}

	return (
		<section className="finder-container">
			{!!finder[0] ? (
				finder.map((element) => {
					return (
						<div
							to={'/film/' + element.id}
							key={element.id}
							className="finder-result"
						>
							<Link to={'/film/' + element.id}>
								<img
									className="finder-result__img"
									src={!element.id ? imageNotAvailable : element.image}
									alt="Search result"
								/>
							</Link>
							<div className="finder-result__details">
								<Link to={'/film/' + element.id}>
									<div className="finder-result__name">{element.title}</div>
								</Link>

								<div className="finder-result__type">{element.description}</div>
							</div>
						</div>
					);
				})
			) : (
				<div className="finder-no-results">No results found</div>
			)}
		</section>
	);
}

export default Finder;
