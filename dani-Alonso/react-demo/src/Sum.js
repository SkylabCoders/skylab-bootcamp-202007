import React from 'react';
import Proptypes from 'prop-types'


function Sum(props) {

    return (<h1>{props.a}+{props.b}={props.a + props.b}</h1>)
}

Sum.propTypes = {
    a: Proptypes.number.isRequired,
    b: Proptypes.number.isRequired
}

export default Sum;