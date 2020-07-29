import React from 'react';


function HeroDashboard({heroes}){
    
    const topHeroes = heroes.slice(0,4);
    
    return(
        <div>
            <p className="dashboard__title">Top Heroes</p>
            <div className="hero__butons__container">
                <button>{topHeroes[0].name}</button>
                <button>{topHeroes[1].name}</button>
                <button>{topHeroes[2].name}</button>
                <button>{topHeroes[3].name}</button>
            </div>

        </div>
    );
   

}

export default HeroDashboard;