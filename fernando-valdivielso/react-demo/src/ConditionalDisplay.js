import React from 'react';
import propTypes from 'prop-types'

function ConditionalDisplay(props) {
    // props.children son los hijos de mi componente, y si valen null, no se pintan
    return (
        <div>
            {props.isVisible ? props.children : null}
        </div>
    );
}

ConditionalDisplay.propTypes = {
    isVisible: propTypes.bool.isRequired
};

export default ConditionalDisplay;