import React from 'react';
import { Router } from 'react-router-dom';

function FooterComponent(props) {
    return (
        <div>
            <button type="button" onClick={() => this.props.history.goBack()}>Back</button>
        </div>
    )
}

export default FooterComponent;