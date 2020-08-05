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
		<Card style={{ width: '18rem' }}>
			<Card.Img variant="top" src={userImg.avatar_url} />
			<Card.Body>
				<Card.Title>{userName}</Card.Title>
				<Card.Text>Followers: {userImg.followers}</Card.Text>
				<Card.Text>Following: {userImg.following}</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default UserInfo;
