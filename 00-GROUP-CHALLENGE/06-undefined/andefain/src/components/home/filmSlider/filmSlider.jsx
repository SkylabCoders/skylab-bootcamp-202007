import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './filmSlider.scss';

let leftSlider = null;
let centerSlider = null;
let rightSlider = null;

function FilmSlider({ data }) {
	const [sliderIndex, setSliderIndex] = useState(0);
	leftSlider = data[sliderIndex === 0 ? data.length - 1 : sliderIndex - 1];
	centerSlider = data[sliderIndex];
	rightSlider = data[sliderIndex === data.length - 1 ? 0 : sliderIndex + 1];

	return (
		<div className="slider-container">
			<div className="slider">
				<Link
					to={'film/' + leftSlider.id.split('/')[2]}
					className="slider__link lateral"
				>
					<img
						className="slider-lateral"
						alt={leftSlider.title}
						src={
							!!leftSlider.image
								? leftSlider.image.url
								: 'https://www.filmaffinity.com/imgs/movies/noimgfull.jpg'
						}
					></img>
				</Link>
				<div className="arrow">
					<img
						src="https://image.flaticon.com/icons/svg/566/566011.svg"
						className="arrow__left"
						alt="Left arrow"
						onClick={() => {
							sliderIndex === 0
								? setSliderIndex(data.length - 1)
								: setSliderIndex(sliderIndex - 1);
						}}
					/>
				</div>
				<Link
					to={'film/' + centerSlider.id.split('/')[2]}
					className="slider__link center"
				>
					<img
						className="slider-center"
						alt={centerSlider.title}
						src={
							!!centerSlider.image
								? centerSlider.image.url
								: 'https://www.filmaffinity.com/imgs/movies/noimgfull.jpg'
						}
					></img>
				</Link>
				<div className="arrow">
					<img
						src="https://image.flaticon.com/icons/svg/566/566011.svg"
						className="arrow__right"
						alt="Right arrow"
						onClick={() => {
							sliderIndex === data.length - 1
								? setSliderIndex(0)
								: setSliderIndex(sliderIndex + 1);
						}}
					/>
				</div>
				<Link
					to={'film/' + rightSlider.id.split('/')[2]}
					className="slider__link lateral"
				>
					<img
						className="slider-lateral"
						alt={rightSlider.title}
						src={
							!!rightSlider.image
								? rightSlider.image.url
								: 'https://www.filmaffinity.com/imgs/movies/noimgfull.jpg'
						}
					></img>
				</Link>
			</div>
			<div className="dots">
				{data.map((obj, i) => {
					let dot = null;
					dot = (
						<span
							key={i}
							className="dot"
							onClick={() => {
								setSliderIndex(i);
							}}
						></span>
					);
					if (i === sliderIndex) {
						dot = <span className="selected-dot" key={i}></span>;
					}
					return dot;
				})}
			</div>
		</div>
	);
}

export default FilmSlider;

FilmSlider.propTypes = {
	data: PropTypes.array
};
