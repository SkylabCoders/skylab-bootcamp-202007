import React from 'react';


function HeroList({ heroList }) {
    return (
        <div>
            <h3>List of Heros</h3>
            {heroList.map((hero) => (
                <a key={hero.id} href={`/id/${hero.id}`} className="hero-list_item"><div>{hero.id} {hero.name}</div></a>
            ))}
        </div>)
}





export default HeroList;