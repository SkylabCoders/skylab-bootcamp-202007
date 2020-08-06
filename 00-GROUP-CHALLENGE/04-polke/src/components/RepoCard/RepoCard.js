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
				<div className="repoCard__name">Polke!!</div>
			</div>
			<div className="repoCard__description">
				As a user I want to log in with Github / Google / Email So that I can
				access the app. **Scenario #1** Given an empty form, and a `checkForm`
				function When user tries to log in Then it should throw an Error
			</div>
			<div className="repoCard__showlastUpdate-lang">
				<div className="repoCard__lastUpdate">13/06/1985</div>
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
