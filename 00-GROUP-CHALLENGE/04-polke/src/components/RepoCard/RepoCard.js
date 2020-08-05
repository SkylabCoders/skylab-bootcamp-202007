import React from 'react';
import './RepoCard.css';
import { Button } from 'react-bootstrap';

function RepoCard() {
	return (
		<section className="repoCard">
			<div className="repoCard__name-private">
				<div className="repoCard__private">
					<img
						className="padlock"
						src={require('../../assets/img/padlock.png')}
						alt="moon"
					/>
					{/* git  */}
				</div>
				<div className="repoCard__name">Name</div>
			</div>
			<div className="repoCard__description">Description</div>
			<div className="repoCard__showlastUpdate-lang">
				<div className="repoCard__lastUpdate">Last update</div>
				<div className="repoCard__lang">css, js, html</div>
			</div>
			<div className="repoCard__details">
				<Button variant="outline-secondary" className="button__details">
					Details
				</Button>
			</div>
		</section>
	);
}

export default RepoCard;
