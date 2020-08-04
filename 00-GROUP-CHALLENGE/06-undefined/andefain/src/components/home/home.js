import React from 'react';
import { Link, Route } from 'react-router-dom';

import FilmSlider from './filmSlider/filmSlider';

function Home() {
	return (
		<>
			<h1>Home works!</h1>
			<FilmSlider />
		</>
	);
}

export default Home;
