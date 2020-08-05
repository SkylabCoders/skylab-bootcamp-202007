import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { sliderData } from '../../../actions/filmActions';
import filmStore from '../../../stores/filmStore';

import './topFilmList.css';

const films = [
	{
		img:
			'https://m.media-amazon.com/images/M/MV5BNmI0MTliMTAtMmJhNC00NTJmLTllMzQtMDI3NzA1ODMyZWI1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg',
		title: 'Dil Bechara',
		year: 2020,
		rating: 9.2
	},
	{
		img:
			'https://m.media-amazon.com/images/M/MV5BNmI0MTliMTAtMmJhNC00NTJmLTllMzQtMDI3NzA1ODMyZWI1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg',
		title: 'Dil Bechara',
		year: 2020,
		rating: 9.2
	}
];

function TopFilmList({ title }) {
	const [film, setFilm] = useState(filmStore.getSliderId());

	useEffect(() => {
		debugger;
		filmStore.addChangeListener(onChange);
		if (film.length === 0) sliderData();
		return () => filmStore.removeChangeListener(onChange);
	}, [film.length]);

	function onChange() {
		setFilm(filmStore.getSliderId());
		console.log(film);
	}

	return (
		<div className="list">
			<h2 className="list__title">{title}</h2>
			{films.map((element, i) => {
				return (
					<Link to={'film/' + element.title} className="list__item" key={i}>
						<div className="item__details">
							<img src={element.img} className="details__img"></img>
							<div className="details__text">
								<h3>{element.title}</h3>
								<h5>{element.year}</h5>
							</div>
						</div>
						<h3 className="item__rating">{element.rating}⭐</h3>
					</Link>
				);
			})}
		</div>
	);
}

export default TopFilmList;
