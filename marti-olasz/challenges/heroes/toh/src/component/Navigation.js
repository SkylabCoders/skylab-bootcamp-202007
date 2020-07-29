import React from 'react';

function Navigation({ onClickDashboard, onClickList }) {
	return (
		<div>
			<h1>Tour of Heroes</h1>
			<div className="buttons">
				<button onClick={onClickDashboard}>Dashbord</button>
				<button onClick={onClickList}>Heroes</button>
			</div>
		</div>
	);
}

export default Navigation;
