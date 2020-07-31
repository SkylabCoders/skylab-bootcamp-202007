import React from 'react';
import heroData from '../heroData';
import '../styles.css';
import { NavLink } from "react-router-dom";


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
    < NavLink activeClassName="my-active-class" to="/hero/:heroId" >
        <ul className="row">
            {
                four.map(hero => (
                    <li className="element__dashboard" key={hero.id}>{hero.name}</li>
                ))
            }
        </ul>
    </NavLink >
);
export default HeroDashboard;