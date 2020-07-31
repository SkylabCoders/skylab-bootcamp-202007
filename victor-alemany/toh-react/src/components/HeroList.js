import React from 'react';
import { NavLink } from 'react-router-dom';
import '../components/HeroList.css'

function HeroList({ heroes }) {
    let myList = heroes.map((hero) => (
        <div key={hero.id} className="hero-item">
            <NavLink activeClassName='my-active-class' to={`/hero/${hero.id}`} >
                <span className="id-span">{hero.id}</span><span className="name-span">{hero.name}</span>
            </NavLink>
        </div>
    )
    );
    return (
        <>
            <div>
                <h1>My Heroes</h1>
            </div>

            <div>
                {myList}
            </div>
        </>
    );
}

export default HeroList;