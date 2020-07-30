import React from 'react';
import PropTypes from 'prop-types'

function ConditionalDisplay(props){
    return <div className="conditional-display">
        {props.isVisible ? props.children : null}
    </div>
}

ConditionalDisplay.propTypes = {
    isVisible: PropTypes.boolisRequired
}

export default ConditionalDisplay;