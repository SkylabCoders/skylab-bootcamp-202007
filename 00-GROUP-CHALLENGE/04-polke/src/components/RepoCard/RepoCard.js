import React from 'react';
import './RepoCard.css';

function RepoCard() {
	return (
		<section className="repoCard">
			<div className="repoCard__name-private">
				<div className="repoCard__private">Candado</div>
				<div className="repoCard__name">Name</div>
			</div>
			<div className="repoCard__description">Description</div>
			<div className="repoCard__showlastUpdate-lang">
				<div className="repoCard__lastUpdate">Last update</div>
				<div className="repoCard__lang">css, js, html</div>
			</div>
			<div className="repoCard__details">
				<button className="button__details">Details</button>
			</div>
		</section>
	);
}

export default RepoCard;
