import React from 'react';
import '../hero-service'
import heroList from '../hero-service';
import HeroDashboardItem from './HeroDashboardItem'


const heroTopList = heroList.slice(0, 4);

function HeroDashboard() {
	return (
		heroTopList.map((hero) => (
			<HeroDashboardItem 
			key={hero.id}
			id={hero.id}
			name={hero.name}
			/>
		))
	)
}

export default HeroDashboard;
