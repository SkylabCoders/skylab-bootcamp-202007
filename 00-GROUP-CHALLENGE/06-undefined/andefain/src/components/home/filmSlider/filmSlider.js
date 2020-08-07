import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './filmSlider.css';

function FilmSlider({ data }) {
	let imageIndex = 0;
	const [rightFilm, setRightFilm] = useState(data[0]);
	const [centerFilm, setCenterFilm] = useState(data[1]);
	const [leftFilm, setLeftFilm] = useState(data[2]);

	useEffect(() => {
		setInterval(() => {
			imageIndex === data.length - 1 ? (imageIndex = 0) : imageIndex++;
			setLeftFilm(data[imageIndex === 0 ? data.length - 1 : imageIndex - 1]);
			setCenterFilm(data[imageIndex]);
			setRightFilm(data[imageIndex === data.length - 1 ? 0 : imageIndex + 1]);
		}, 5000);
	}, []);

	return (
		<div className="slider-container">
			<div className="slider">
				<Link
					to={'film/' + leftFilm.id.split('/')[2]}
					className="slider__link lateral"
				>
					<img
						className="slider-lateral"
						src={
							!!leftFilm.image
								? leftFilm.image.url
								: 'https://www.filmaffinity.com/imgs/movies/noimgfull.jpg'
						}
					></img>
				</Link>
				<Link
					to={'film/' + centerFilm.id.split('/')[2]}
					className="slider__link center"
				>
					<img
						className="slider-center"
						src={
							!!centerFilm.image
								? centerFilm.image.url
								: 'https://www.filmaffinity.com/imgs/movies/noimgfull.jpg'
						}
					></img>
				</Link>
				<Link
					to={'film/' + rightFilm.id.split('/')[2]}
					className="slider__link lateral"
				>
					<img
						className="slider-lateral"
						src={
							!!rightFilm.image
								? rightFilm.image.url
								: 'https://www.filmaffinity.com/imgs/movies/noimgfull.jpg'
						}
					></img>
				</Link>
			</div>
			<div className="dots">
				{data.map(() => {
					return <span className="dot"></span>;
				})}
			</div>
		</div>
	);
}

export default FilmSlider;

FilmSlider.propTypes = {
	data: PropTypes.array
};
