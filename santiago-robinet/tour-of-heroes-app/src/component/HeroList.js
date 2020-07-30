import React from 'react';



function HeroList({heroes}){

    const heroList = heroes.map((hero) => (
        <button key={hero.id}>
            <span className='hero__id'>{hero.id}</span>
            <span className='hero__name'>{hero.name}</span>
        </button>
    ));

    return (
        <div>
            <h2>Hero List</h2>
            <div className='hero__list__container'>{heroList}</div>
        </div>
    );

}


export default HeroList;