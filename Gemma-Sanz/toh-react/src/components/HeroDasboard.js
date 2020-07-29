import React from 'react';
import '../bootstrap.min.css';
import heroData from '../heroData';

function HeroDashboard() {
    return (
        <div>
            {fourHeroes()}
        </div>
    )
}
let four = heroData.slice(0, 4);
const fourHeroes = () => (
    <ul className="row">
        {
            four.map(hero => (
                <li className="col-3" key={hero.id}>{hero.name}</li>
            ))
        }
    </ul>
);
export default HeroDashboard;