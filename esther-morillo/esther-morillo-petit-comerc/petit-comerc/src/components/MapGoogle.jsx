import React from 'react'

function ApiMap({ address }) {
    const key = 'AIzaSyCfJQauLQR4Wh8kOBqc_Hrzzy-snEDbetE';
    const url = `https://www.google.com/maps/embed/v1/place?key=${key}
    &q=${address}&zoom=20`;

    return (
        <iframe
            className="map"
            width="600"
            height="450"
            frameborder="0"
            src={`${url}`} allowfullscreen>
        </iframe>        
    )

}

export default ApiMap;
