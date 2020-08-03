import React, { useEffect, useState } from 'react';

function Hello() {
	let interval = null;
	const [date, setDate] = useState('');

	useEffect(() => {
		interval = setInterval(() => {
			let now = new Date().toISOString();
			setDate(now);
		}, 1000);
	}, []);

	clearInterval(interval);

	return <h1>Hello at {date}</h1>;
}

export default Hello;
