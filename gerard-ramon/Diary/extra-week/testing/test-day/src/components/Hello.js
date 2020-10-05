import React from 'react';

export default function Hello({ name }) {
	const salute = <h1>Hello, {name}!</h1>;
	const stranger = <span>Hey, stranger</span>;

	return name ? salute : stranger;
}
