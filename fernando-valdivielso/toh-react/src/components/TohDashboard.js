import React from 'react';
import heroData from '../heroData'
import '../bootstrap.min.css'

function TohDashboard() {
    return (
        <div >
            {fourHeroes()}
        </div>
    )


}

let four = heroData.slice(0, 4);

const fourHeroes = () => ( //por qué () y no {}???
    <ul className='row'>
        {
            four.map(hero => (
                <li className='col-3' key={hero.id}> {hero.name}</li>
            ))

        }
    </ul>
);












export default TohDashboard;