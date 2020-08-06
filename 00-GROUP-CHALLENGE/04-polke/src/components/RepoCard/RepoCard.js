import React from 'react';
import './RepoCard.css';
import { Button } from 'react-bootstrap';

function RepoCard({ repoInfoList }) {
	const lockImg = null;

	// if (repoInfoList.private === true) {
	// 	lockImg = (
	// 		<img
	// 			className="padlock"
	// 			src={require('../../assets/img/padlock.png')}
	// 			alt="padlock"
	// 		/>
	// 	);
	// } else {
	// 	lockImg = (
	// 		<img
	// 			className="padlock"
	// 			src={require('../../assets/img/unlock.png')}
	// 			alt="unlock"
	// 		/>
	// 	);
	// }

	return (
		<section className="repoCard">
			<div className="repoCard__name-private">
				<div className="repoCard__private">
					{lockImg}
					{/* git  */}
				</div>
				<div className="repoCard__name">{repoInfoList.name}</div>
			</div>
			<div className="repoCard__description">{repoInfoList.description}</div>
			<div className="repoCard__showlastUpdate-lang">
				<div className="repoCard__lastUpdate">{repoInfoList.lastUpdate}</div>
				<div className="repoCard__lang">{repoInfoList.language}</div>
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
