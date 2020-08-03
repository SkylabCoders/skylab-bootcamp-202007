import React from 'react';
import { Router } from 'react-router-dom';
import footerComponent from "footerComponent";

function FooterComponent(props) {
    return (
        <div>
            <button type="button" onClick={() => this.props.history.goBack()}>Back</button>
        </div>
    )
}

export default FooterComponent;