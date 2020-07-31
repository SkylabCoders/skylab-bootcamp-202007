import React from 'react';
import './HeroList.css'

function HeroList({ heroList }) {
    return (
        <div>
            <ul className='heroes'>
                <h3>List of Heros</h3>
                {heroList.map((hero) => (
                    <li key={hero.id}><a href={`/id/${hero.id}`}
                        className="hero-list_item"><span className="badge ">{hero.id}</span> {hero.name}</a></li>
                ))}
            </ul>
        </div>)
}




export default HeroList;