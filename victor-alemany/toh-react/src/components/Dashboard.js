import React from 'react';

function Dashboard({heroes}) {
    const heroListPromoted = heroes.slice(0,4);
    const heroList = heroListPromoted.map((hero) => (
        <div key={hero.id}>
            <a href=""><span className="hero-dashboard__name">{hero.name}</span></a> 
		</div>
    ));	

    return (<div className="hero__dashboard__container"><h2>My Heroes Promoted</h2><div>{heroList}</div></div>
    );
}

export default Dashboard;