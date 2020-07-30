import React from 'react';
import '../Assets/HeroList.css';

function Dashboard({ reducedHeroList }) {
	return <ul className="heroDashboard">{reducedHeroList}</ul>;
}

export default Dashboard;
