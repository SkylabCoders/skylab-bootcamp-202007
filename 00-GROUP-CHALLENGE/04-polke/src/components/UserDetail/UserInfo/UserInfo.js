import React, { useEffect, useState } from 'react';
import '../../../shared/generalStyles.css';
import './UserInfo.css';
import { Card } from 'react-bootstrap';
import userDetailStore from '../../../stores/userDetailStore';
import { loadUserImg } from '../../../actions/userDetailActions';

function UserInfo({ githubUserName }) {
	const [userImg, setuserImg] = useState([]);

	useEffect(() => {
		userDetailStore.addChangeListener(onChange);
		if (userImg.length === 0 && githubUserName) {
			loadUserImg(githubUserName);
		}

		return () => userDetailStore.removeChangeListener(onChange);
	}, [userImg.length]);

	function onChange() {
		setuserImg(userDetailStore.getUserInfo());
	}
	return (
		<Card className="user-info-card">
			<Card.Title className="user-info-card__main-title">USER INFO</Card.Title>
			<Card.Img roundedCircle variant="top" src={userImg.avatar_url} />
			<Card.Body>
				<Card.Title className="user-info-card__name-title">
					<a href={userImg.html_url}>{userImg.company}</a>
				</Card.Title>
				<Card.Text>
					<span className="user-info-card__category">Followers: </span>{' '}
					{userImg.followers}
				</Card.Text>
				<Card.Text>
					<span className="user-info-card__category">Bio: </span>
					{userImg.bio || 'No bio available'}
				</Card.Text>
				<Card.Text>
					<span className="user-info-card__category">Location: </span>{' '}
					{userImg.location || 'No location available'}
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default UserInfo;
