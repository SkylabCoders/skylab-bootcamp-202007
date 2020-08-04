import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import './filmSlider.css';

const films = [
	{
		title: 1,
		img:
			'https://m.media-amazon.com/images/M/MV5BZTdjOTY4MmItMWI0OS00Y2UyLTlmOGQtZTViNGM0NTViYjM3XkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_.jpg'
	},
	{
		title: 2,
		img:
			'https://m.media-amazon.com/images/M/MV5BZDZmYjQxNTctMWEzNS00NjMyLWFlNjQtM2IyNWJjYWQzOGQzXkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_.jpg'
	},
	{
		title: 3,
		img:
			'https://m.media-amazon.com/images/M/MV5BNTRlMzhjMzYtNmY1NC00ODc5LWE1OWQtNjVjZTY4MzI5ZGNmXkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_.jpg'
	}
];

function FilmSlider() {
	let imageIndex = 0;
	const [rightFilm, setRightFilm] = useState(films[0]);
	const [centerFilm, setCenterFilm] = useState(films[1]);
	const [leftFilm, setLeftFilm] = useState(films[2]);

	useEffect(() => {
		setInterval(() => {
			imageIndex === films.length - 1 ? (imageIndex = 0) : imageIndex++;
			setRightFilm(films[imageIndex === films.length - 1 ? 0 : imageIndex + 1]);
			setCenterFilm(films[imageIndex]);
			setLeftFilm(films[imageIndex === 0 ? 2 : imageIndex - 1]);
		}, 5000);
	}, []);

	return (
		<div className="slider-container">
			<div className="slider">
				<div
					className="slider-lateral"
					style={{ backgroundImage: `url(${rightFilm.img})` }}
				>
					<h2 className="slider__title">{rightFilm.title}</h2>
				</div>
				<div
					className="slider-center"
					style={{ backgroundImage: `url(${centerFilm.img})` }}
				>
					<h2 className="slider__title">{centerFilm.title}</h2>
				</div>
				<div
					className="slider-lateral"
					style={{ backgroundImage: `url(${leftFilm.img})` }}
				>
					<h2 className="slider__title">{leftFilm.title}</h2>
				</div>
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
