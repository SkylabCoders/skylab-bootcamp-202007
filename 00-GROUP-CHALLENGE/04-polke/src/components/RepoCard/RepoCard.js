import React from 'react';
import './RepoCard.css';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function RepoCard({ repoInfoList }) {
	let lockImg = null;

	if (repoInfoList.private === true) {
		lockImg = (
			<img
				className="padlock"
				src={require('../../assets/img/padlock.png')}
				alt="padlock"
			/>
		);
	} else {
		lockImg = (
			<img
				className="padlock"
				src={require('../../assets/img/unlock.png')}
				alt="unlock"
			/>
		);
	}
	let desc = repoInfoList.description;
	if (desc.length > 50) {
		desc = desc.slice(0, 47) + '...';
	}

	return (
		<section className="repoCard">
			<div className="repoCard__name-private">
				<div className="repoCard__private">{lockImg}</div>
				<div className="repoCard__name">
					<b>{repoInfoList.name}</b>
				</div>
			</div>
			<div className="repoCard__description">{desc}</div>
			<div className="repoCard__showlastUpdate-lang">
				<div className="repoCard__lastUpdate">
					{repoInfoList.lastUpdate.split('T')[0]}
				</div>
				<div className="repoCard__lang">{repoInfoList.language}</div>
			</div>
			<div className="repoCard__details">
				<Button variant="primary" className="button__details">
					<NavLink
						to={`/repoDetail/${repoInfoList.userName}/${repoInfoList.name}`}
						className="repoCard__navlink"
					>
						Details
					</NavLink>
				</Button>
			</div>
		</section>
	);
}

export default RepoCard;
