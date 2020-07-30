import React from 'react';

function Details({ renderDashBoard, heroName }) {

    return (
        <div id="hero_detail">
            <p>id: <span id="hero-detail__id"></span></p>
            <label for="heroName">
                name:
        <input id="hero-detail__name-control" type="text" name={heroName} />
            </label>

            <a onClick={renderDashBoard}>Back</a>
        </div>)

}

export default Details;