import React from 'react';
import { Router } from 'react-router-dom';
import './footerComponent.css';

function FooterComponent(props) {
    return (
        <div className="mainContainer">
            <p>By GGJ</p>
            <button type="button" onClick={() => this.props.history.goBack()}>Back</button>
            <img alt="Dragon Ball One Start" src="https://i.pinimg.com/originals/a5/f9/a2/a5f9a2eb5c0bfb1f66988696e1f31334.png" onClick={() => this.props.history.goBack()}></img>
        </div>
    )
}

export default FooterComponent;