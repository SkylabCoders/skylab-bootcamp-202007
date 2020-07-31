import React from 'react';
import { Link } from 'react-router-dom';
import heroList from '../toh.moks.js';

function List(props) {
	return (
		<>
			<ul>
				{heroList.map((hero) => (
					<li key={hero.id}>
						<Link to={`/hero/${hero.id}`}>
							{hero.id}
							{hero.name}
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}
export default List;
