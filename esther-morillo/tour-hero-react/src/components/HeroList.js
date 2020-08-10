import React from 'react';
import '../hero-service'
import heroList from '../hero-service';
import HeroListItem from './HeroLIstItem'


function HeroList() {
	return (
		heroList.map((hero) => (
		<HeroListItem
			key={hero.id}
			id={hero.id}
			name={hero.name}
		/>
		))
	)
	
}

export default HeroList;
