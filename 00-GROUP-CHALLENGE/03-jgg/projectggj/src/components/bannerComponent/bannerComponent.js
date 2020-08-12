import React from 'react';
import './bannerComponent.css';

function BannerComponent(props) {
    return (
        <div className="bannerContainer">
            <img className="bannerImage" src="https://wallpapercave.com/wp/wp4855908.png" alt="wallpaper kamehouse"></img>
            <h1>WELCOME</h1>
        </div>
    )
}

export default BannerComponent;