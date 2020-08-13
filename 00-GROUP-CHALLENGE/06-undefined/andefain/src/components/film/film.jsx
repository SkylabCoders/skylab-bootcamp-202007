import React, { useEffect, useState } from 'react';
import FilmTrailer from './trailer/FilmTrailer';
import FilmDetails from './details/FilmDetails';
import filmStore from '../../stores/filmStore';
import { callFilm } from '../../actions/filmActions';
import './film.scss';

function Film() {
	const [film, setFilm] = useState('');

	useEffect(() => {
		filmStore.addChangeListener(onChange);
		if (film.length === 0) callFilm();
		return () => filmStore.removeChangeListener(onChange);
	}, []);

	function onChange() {
		setFilm(filmStore.getFilmData());
	}
	return (
		<section className="film-container">
			{film !== [] && <FilmTrailer trailer={film} />}
			{film !== [] && <FilmDetails details={film} />}
		</section>
	);
}

export default Film;
