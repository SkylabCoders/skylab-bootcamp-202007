import React from 'react';
import propTypes from 'prop-types';

function Sum(props) {
	return (
		<h1>
			{props.a} + {props.b} = {props.a + props.b}
		</h1>
	);
}

Sum.propTypes = {
	a: propTypes.number.isRequired,
	b: propTypes.number.isRequired
};

export default Sum;
