import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import './filmSlider.css';

const films = [
	{
		title: 'Title',
		img:
			'https://m.media-amazon.com/images/M/MV5BZTdjOTY4MmItMWI0OS00Y2UyLTlmOGQtZTViNGM0NTViYjM3XkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_.jpg'
	},
	{
		title: 'Title',
		img:
			'https://m.media-amazon.com/images/M/MV5BZDZmYjQxNTctMWEzNS00NjMyLWFlNjQtM2IyNWJjYWQzOGQzXkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_.jpg'
	},
	{
		title: 'Title',
		img:
			'https://m.media-amazon.com/images/M/MV5BNTRlMzhjMzYtNmY1NC00ODc5LWE1OWQtNjVjZTY4MzI5ZGNmXkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_.jpg'
	}
];

function FilmSlider() {
	let imageIndex = 0;
	const [film, setFilm] = useState(films[0]);

	useEffect(() => {
		setInterval(() => {
			imageIndex === films.length - 1 ? (imageIndex = 0) : imageIndex++;
			setFilm(films[imageIndex]);
		}, 5000);
	}, []);

	/*function onAnimationEnd{
		i === films.length - 1 ? (i = 0) : i++;
		console.log(i);
		setFilm(films[i]);
    }*/

	return (
		<div className="slider-container">
			<div className="slider" style={{ backgroundImage: `url(${film.img})` }}>
				<h2 className="slider__title">{film.title}</h2>
			</div>
			<div className="dots">
				{films.map(() => {
					return <span className="dot"></span>;
				})}
			</div>
		</div>
	);
}

export default FilmSlider;
