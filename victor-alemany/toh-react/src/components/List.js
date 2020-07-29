import React from 'react';
//import '../components/hero-list.component.css';


function List({heroes}) {
    const heroList = heroes.map((hero) => (
        <a key={hero.id}>
            <span className="hero-list__id">{hero.id}</span>
            <span className="hero-list__name">{hero.name}</span>
		</a>
    ));	

    return (<div className="hero__list__container"><div>{heroList}</div></div>
    );
}

export default List;