import React from 'react';
import '../bootstrap.min.css';
import heroData from '../heroData';

function HeroList(props) {
    return (
        <div>
            {renderedHeroes()};
        </div>
    )
}
const renderedHeroes = () => (
    <ul>
        {heroData.map(hero => (
            <li key={hero.id}>{hero.id} {hero.name}</li>
        ))}
    </ul>
)



export default HeroList;