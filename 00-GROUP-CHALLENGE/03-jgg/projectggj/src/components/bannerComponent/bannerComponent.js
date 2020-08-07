import React from 'react';
import './bannerComponent.css';
import '../../'

function BannerComponent(props) {
    return (
        <div className="bannerContainer">
            <img className="bannerImage" src="https://elcomercio.pe/resizer/WO_SUH5sZGaoB6J7txISRZqZXXk=/1200x1200/smart/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/P4VYBC4YRRGNZN5RUJRBJOEK3U.jpg" alt="wallpaper kamehouse"></img>
            <h1>WELCOME</h1>
        </div>
    )
}

export default BannerComponent;