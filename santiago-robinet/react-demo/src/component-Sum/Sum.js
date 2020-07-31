import React from 'react'
import PropTypes from 'prop-types';

function Sum(props){
return <div>{props.a} + {props.b} = {props.a + props.b}</div>
}

Sum.protoType = {
    a: PropTypes.number.isRequired,
    b: PropTypes.number.isRequired
};

export default Sum;