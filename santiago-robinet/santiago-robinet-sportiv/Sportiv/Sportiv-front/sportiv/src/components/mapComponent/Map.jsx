import React  from 'react';

function APImap({city , street}){
    function urlMap(){
        const key = 'AIzaSyBPsTZZ-9hrU02hJOjG5YZbVGsTsW2KZoA';
        const url  = `https://www.google.com/maps/embed/v1/place?key=${key}&q=${city},${street}&zoom=15`;
        return url;

    }
    return(
        <iframe
        className='map'
        // width="600"
        // height="450"
        frameborder="0" 
        src={`${urlMap()}`} allowfullscreen>
        </iframe>
    )

}

export default APImap;

