import React from 'react';
import { Link, Route } from 'react-router-dom';

function Finder(title, name) {
	return (
		<>
			<div className="finder">
				{title && (
					<div className="finder-title">
						<span className="film-title"></span>
						<span> | </span>
						<span>Title</span>
						<span> | </span>
						<span className="title-rating"></span>
					</div>
				)}{' '}
				{name && (
					<div className="finder-name">
						<span> | </span>
						<span className="person-name"></span>
						<span> | </span>
						<span>Name</span>
					</div>
				)}
			</div>
		</>
	);
}

export default Finder;
