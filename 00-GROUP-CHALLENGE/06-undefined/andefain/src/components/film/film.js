import React from 'react';
import { Link, Route } from 'react-router-dom';
import FilmDetails from './details/details';
import FilmNames from './names/names';
import './film.css';

function Film() {
	return (
		<>
			<div className="film-description">
				<FilmNames />
				<FilmDetails />
			</div>
		</>
	);
}

export default Film;
