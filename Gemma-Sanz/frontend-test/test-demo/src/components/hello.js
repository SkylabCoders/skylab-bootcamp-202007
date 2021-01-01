import React from 'react';

// Esta fn tiene props, pero ya hacemos un destructuring de props.name
export default function Hello({ name }) {
	return name ? <h1>Hello, {name}!</h1> : <span>Hey, stranger</span>;
}
