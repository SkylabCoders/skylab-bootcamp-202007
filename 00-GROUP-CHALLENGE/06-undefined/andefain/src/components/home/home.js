import React from 'react';
import { Link, Route } from 'react-router-dom';

import FilmSlider from './filmSlider/filmSlider';
import TopFilmList from './topFilmList/topFilmList';

import './home.css';

function Home() {
	return (
		<>
			<FilmSlider />
			<div className="list-container">
				<TopFilmList title={'Coming soon Movies'} />
				<TopFilmList title={'Most popular movies'} />
			</div>
		</>
	);
}

export default Home;
