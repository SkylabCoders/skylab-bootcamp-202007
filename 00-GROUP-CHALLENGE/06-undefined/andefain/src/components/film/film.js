import React from 'react';
import { Link, Route } from 'react-router-dom';
import Trailer from './trailer/trailer';
import FilmDetails from './details/details';
import FilmNames from './names/names';
import './film.css';

function Film() {
	return (
		<>
			<Trailer />
			<div className="film-description">
				<FilmNames />
				<FilmDetails />
			</div>
		</>
	);
}

export default Film;
