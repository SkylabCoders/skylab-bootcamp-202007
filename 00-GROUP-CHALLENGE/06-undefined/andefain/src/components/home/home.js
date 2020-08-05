import React, { useState, useEffect } from 'react';

import FilmSlider from './filmSlider/filmSlider';
import TopFilmList from './topFilmList/topFilmList';

import {
	sliderData,
	comingSoonData,
	mostPopularData
} from '../../actions/filmActions';
import filmStore from '../../stores/filmStore';

import './home.css';

const films = [
	{
		img:
			'https://m.media-amazon.com/images/M/MV5BNmI0MTliMTAtMmJhNC00NTJmLTllMzQtMDI3NzA1ODMyZWI1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg',
		title: 'Dil Bechara',
		year: 2020,
		rating: 9.2
	},
	{
		img:
			'https://m.media-amazon.com/images/M/MV5BNmI0MTliMTAtMmJhNC00NTJmLTllMzQtMDI3NzA1ODMyZWI1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg',
		title: 'Dil Bechara',
		year: 2020,
		rating: 9.2
	}
];

function Home() {
	const [comingSoon, setComingSoon] = useState(filmStore.getComingsoonId());

	useEffect(() => {
		filmStore.addChangeListener(onChange);
		if (comingSoon.length === 0) comingSoonData();
		return () => filmStore.removeChangeListener(onChange);
	}, [comingSoon.length]);

	function onChange() {
		setComingSoon(filmStore.getComingsoonId());
	}
	return (
		<>
			<FilmSlider />
			<div className="list-container">
				{comingSoon.length === 5 && (
					<TopFilmList title="Coming soon Movies" data={comingSoon} />
				)}
				<TopFilmList title={'Most popular movies'} data={[]} />
			</div>
		</>
	);
}

export default Home;
