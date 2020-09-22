import React from 'react';
import PropTypes from 'prop-types'

function Sum(props) {
    return (
        <h1>
            {props.a} + {props.b} = {props.a + props.b};
        </h1>
    );
}

Sum.propTypes = {
    a: PropTypes.number.isRequired, // the lines executes but throws an error in console
    b: PropTypes.number.isRequired // we are defining the type of value that we are passing in as props
};

export default Sum;