import React from 'react';
import heroData from '../heroData';
import '../styles.css';
import { Link } from "react-router-dom";


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
                <Link key={hero.id} to={`/hero/${hero.id}`}>
                    <li className="element__dashboard" >{hero.name}</li>
                </Link>
            ))
        }
    </ul>
);
export default HeroDashboard;