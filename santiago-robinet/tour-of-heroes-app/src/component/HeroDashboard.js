import React from 'react';


function HeroDashboard({heroes}){
    
    const topHeroesPromotion = heroes.slice(0,4);
   
    const topHeroes = topHeroesPromotion.map((hero) => (
        <button key={hero.id}>{hero.name}</button>
    ));
    
    return(
        <div>
            <p className="dashboard__title">Top Heroes</p>
            <div className="hero__butons__container">
                {topHeroes}
            </div>

        </div>
    );
   

}

export default HeroDashboard;