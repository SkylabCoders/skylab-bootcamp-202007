import React from 'react';
import PropTypes from 'prop-types';

function ConditionalDisplay(props) {
	return (
		<div className="conditional-display">
			{props.isVisible === true ? props.children : null}
		</div>
	);
}

ConditionalDisplay.propTypes = {
	isVisible: PropTypes.bool.isRequired
};

export default ConditionalDisplay;
