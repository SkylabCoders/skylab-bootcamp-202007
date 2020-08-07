import React from 'react';
import './bannerComponent.css';
import '../../'

function BannerComponent(props) {
    return (
        <div className="bannerContainer">
            <img className="bannerImage" src="https://i.pinimg.com/originals/9d/ba/b3/9dbab3202a6331c5e82ae7fe38a104c8.png" alt="wallpaper kamehouse"></img>
            <h1>WELCOME</h1>
        </div>
    )
}

export default BannerComponent;