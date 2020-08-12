import React from 'react';
import './footerComponent.css';

function FooterComponent() {
    return (
        <div className="mainContainer">
            <img title='Go Back' alt="Dragon Ball One Start" src="https://i.pinimg.com/originals/a5/f9/a2/a5f9a2eb5c0bfb1f66988696e1f31334.png" onClick={() => window.history.back()}></img>
            <p>By Gemma Sanz | Gabriel Penalva | Jordi Muñoz</p>
        </div>
    )
}

export default FooterComponent;