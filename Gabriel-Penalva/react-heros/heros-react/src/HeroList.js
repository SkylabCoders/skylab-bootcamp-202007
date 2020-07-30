import React from 'react';
//import heroList from './hero.mock'

function HeroList({ list }) {
    return (<div>{showList(list)}</div>)
}

const showList = (heroList) => (
    <div>
        {heroList.map(hero => (
            <div key={hero.id}> id: {hero.id}, {hero.name}</div>
        ))}
    </div>
)



export default HeroList;