import React from 'react'
import PropTypes from 'prop-types';

function ConDitionalDisplay(props){
    return <div>
        {props.isVisible ? props.children : null}
    </div>
}

ConDitionalDisplay.propTypes = {
    isVisible: PropTypes.bool.isRequired
};

export default ConDitionalDisplay;