import React from 'react';


function List({heroes}) {
    const heroList = heroes.map((hero) => (
        <div key={hero.id}>
            <a href=""><span className="hero-list__id">{hero.id}</span></a>
            <a href=""><span className="hero-list__name">{hero.name}</span></a>
		</div>
    ));	

    return (<div className="hero__list__container"><h2>My Heroes</h2><div>{heroList}</div></div>
    );
}

export default List;