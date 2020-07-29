import React from 'react';
import Dashboard from './Dasboard';

function Detail({ hero }) {
    return (<div>
        <h2>{hero.name} details</h2>
        <p>id: {hero.id}
        </p>
        <label for="heroName">
            name:
				<input id="hero-detail__name-control" type="text" name="heroName"
            />
        </label></div >

    )



}

export default Detail