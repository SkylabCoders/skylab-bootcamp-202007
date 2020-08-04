import { Link, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './details.css';
import film from './details.mock';

const darkKnight = [...film][0];

function FilmDetails() {
	return (
		<>
			<div className="film-details">
				<h1 className="film-details__title">{darkKnight.title}</h1>
				<div className="film-details__head">
					<span>
						<span>{darkKnight.year}</span>
						<span> | </span>
						<span>{darkKnight.duration}</span>
						<span> | </span>
						<span>{darkKnight.genres}</span>
					</span>
				</div>
				<div className="film-details__plot">
					<h3 className="plot-title">Plot</h3>
					<p className="plot-details">{darkKnight.plot}</p>
				</div>
			</div>
		</>
	);
}

export default FilmDetails;
