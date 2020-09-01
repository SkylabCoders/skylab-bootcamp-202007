import React, { useState } from 'react';
import apiSearch from '../actions/apiActions';

function Home() {
	const [data, setData] = useState([]);

	apiSearch();

	return <main className="home__container">Home works</main>;
}

export default Home;
