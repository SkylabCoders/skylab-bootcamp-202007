import React from 'react';
import './bannerComponent.css';

function BannerComponent(props) {
    return (
        <div className="bannerContainer">
            <img className="bannerImage" src="https://smoothcomp.com/pictures/t/428311-tn68/master-roshis-gym.png?embedView=1" alt="wallpaper kamehouse"></img>
            <h1>WELCOME</h1>
        </div>
    )
}

export default BannerComponent;