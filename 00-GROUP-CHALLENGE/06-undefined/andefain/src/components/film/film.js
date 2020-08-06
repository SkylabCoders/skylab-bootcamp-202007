import React, { useEffect, useState } from 'react';
import Trailer from './trailer/trailer';
import FilmDetails from './details/details';
import FilmNames from './names/names';
import filmStore from '../../stores/filmStore';
import { callFilm } from '../../actions/filmActions';
import './film.css';

function Film() {
	const [film, setFilm] = useState(filmStore.getFilmDetails());

	useEffect(() => {
		filmStore.addChangeListener(onChange);
		if (film.length === 0) callFilm();
		return () => filmStore.removeChangeListener(onChange);
	}, []);

	function onChange() {
		setFilm(filmStore.getFilmDetails());
	}
	return (
		<>
			{!!film[0] && <Trailer details={film[0]} trailer={film[3]} />}
			<div className="film-description">
				{!!film[0] && (
					<FilmDetails
						details={film[0]}
						plot={film[1]}
						genres={film[2]}
						names={film[4]}
					/>
				)}
			</div>
		</>
	);
}

export default Film;
