import React from 'react';
import '../Assets/HeroList.css';

function HeroList({ renderedHeroesList }) {
	return <ul className="containerList">{renderedHeroesList}</ul>;
}

export default HeroList;
