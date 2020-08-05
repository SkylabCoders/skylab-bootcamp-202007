import React, { useEffect, useState } from 'react';
import '../../../shared/generalStyles.css';
import './UserInfo.css';
import { Card } from 'react-bootstrap';
import userDetailStore from '../../../stores/userDetailStore';
import { loadUserImg } from '../../../actions/userDetailActions';

function UserInfo() {
	const [userImg, setuserImg] = useState([]);
	const [userName, setUserName] = useState('infohab');

	useEffect(() => {
		userDetailStore.addChangeListener(onChange);
		if (userImg.length === 0) {
			loadUserImg(userName);
		}
		console.log(userImg);

		return () => userDetailStore.removeChangeListener(onChange);
	}, [userImg.length]);

	function onChange() {
		setuserImg(userDetailStore.getUserInfo());
	}
	console.log(userImg);
	return (
		<Card className="user-info-card">
			<Card.Img variant="top" src={userImg.avatar_url} />
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
