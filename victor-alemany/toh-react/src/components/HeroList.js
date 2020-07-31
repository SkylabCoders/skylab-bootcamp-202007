import React from 'react';
import { NavLink } from 'react-router-dom';

function HeroList({heroes}){
    let myList = heroes.map((hero) => (
        <div key={hero.id}>
            <NavLink activeClassName='my-active-class' to={`/hero/${hero.id}`} >
                <span className="id-span">{hero.id}</span><span className="name-span">{hero.name}</span>
            </NavLink>
        </div>
    )
    );
    return ( <div>
            {myList}
        </div>
    );
}

export default HeroList;