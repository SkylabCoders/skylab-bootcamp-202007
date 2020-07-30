import React from 'react';
import { NavLink } from 'react-router-dom';

function HeroDashboard({heroes}) {
	const topHeroesPromotion = heroes.slice(0,4);
   
    const topHeroes = topHeroesPromotion.map((hero) => (
        <NavLink to={`/hero/${hero.id}`} key={hero.id} className="hero__container__button">{hero.name}</NavLink>
	));
	
	return(
        <div className="dashboard__container">
            <p className="dashboard__title">Top Heroes</p>
            <div className="hero__buttons__container">
                {topHeroes}
            </div>

        </div>
	);
}

export default HeroDashboard;
