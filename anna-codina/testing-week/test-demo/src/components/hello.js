import React from 'react';

export default function Hello({ name }) {
	return name ? <h1>Hello, {name}</h1> : <span>Hey, stranger</span>;
}
