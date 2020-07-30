import React from 'react';
import heroData from '../heroData';
import '../styles.css';

function HeroDashboard() {
    return (
        <div className="containerComponent">
            <h2>Top Heroes!</h2>
            {fourHeroes()}
        </div>
    )
}
let four = heroData.slice(0, 4);
const fourHeroes = () => (
    <ul className="row">
        {
            four.map(hero => (
                <li className="element__dashboard" key={hero.id}>{hero.name}</li>
            ))
        }
    </ul>
);
export default HeroDashboard;