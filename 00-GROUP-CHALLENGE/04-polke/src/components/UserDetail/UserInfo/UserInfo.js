import React from 'react';
import '../../../shared/generalStyles.css';
import './UserInfo.css';
import { Card } from 'react-bootstrap';

function UserInfo() {
	const [userImg, setuserImg] = useState([]);
	const [userName, setUserName] = useState('phortela1n');

	return (
		<Card style={{ width: '18rem' }}>
			<Card.Img variant="top" src="holder.js/100px180" />
			<Card.Body>
				<Card.Title>User Name</Card.Title>
				<Card.Text>User description</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default UserInfo;
