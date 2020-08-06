import React from 'react';
import './details.css';
import film from '../film.mock';

const darkKnight = [...film][0];

function FilmDetails({ details, plot, genres }) {
	return (
		<>
			<div className="film-details">
				<h1 className="film-details__title">{details.title}</h1>
				<div className="film-details__head">
					<span>
						<span>{details.year}</span>
						<span> | </span>
						<span>{details.runningTimeInMinutes + ' min'}</span>
						<span> | </span>
						<span>{genres.join(', ')}</span>
					</span>
				</div>
				<div className="film-details__plot">
					<h3 className="plot-title">Plot</h3>
					<p className="plot-details">{plot.plots[0].text}</p>
				</div>
			</div>
		</>
	);
}

export default FilmDetails;
