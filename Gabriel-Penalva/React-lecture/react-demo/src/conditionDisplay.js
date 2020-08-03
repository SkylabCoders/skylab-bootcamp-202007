import React from 'react';
import PropTypes from 'prop-types';

function ConditionDisplay(props) {
    console.log(props);
    return (
        <div>
            {props.isVisible ? props.children : 'Invisible'}
        </div>
    );
}
ConditionDisplay.propTypes = {
    isVisible: PropTypes.bool.isRequired
}

export default ConditionDisplay;