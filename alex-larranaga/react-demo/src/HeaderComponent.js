import React from 'react';
const { render } = require('react-dom');

function HeaderComponent({ now }) {
	return <h1>Hello at {now}</h1>;
}

export default HeaderComponent;
