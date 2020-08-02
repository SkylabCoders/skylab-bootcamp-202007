import React from 'react';
import { NavLink } from 'react-router-dom';

function UserDetail() {
	return (
		<>
			<h1>UserDetail Works</h1>
			<NavLink to="/repoDetail">SimulatedRepo#1</NavLink>
		</>
	);
}

export default UserDetail;
