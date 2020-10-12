import React, { useState, useEffect } from 'react';
import { loginOrRegisterUserStrava } from '../../actions/authActions';
import { useHistory } from 'react-router-dom';
import authStore from '../../stores/authStore';

import './AuthStrava.scss';

function AuthStrava(props) {
	const [stravaUser, setStravaUser] = useState(authStore.getAuthUser());

	const history = useHistory();

	const searchParams = new URLSearchParams(window.location.search);
	const authCode = searchParams.get('code');

	useEffect(() => {
		authStore.addChangeListener(onChange);
		if (!stravaUser) {
			loginOrRegisterUserStrava(authCode);
		} else {
			history.replace('/bikes');
		}
	});

	function onChange() {
		setStravaUser(authStore.getAuthUser());
	}

	return (
		<>
			<div className='auth__header'>
				<img
					className='auth__logo'
					src='https://cdn.discordapp.com/attachments/692420285143711814/693437226146594876/LogoGerili.png'
					alt='logo'
				/>

				<p className='auth__appName'>bikUP</p>
				<div className='flex-spacer'></div>
			</div>
			<div className='auth__loading'>
				<img
					src='https://trello-attachments.s3.amazonaws.com/5f4cb639a6f5eb1005114de4/5f5753c458a8b552f891bb81/25b7845da50467b914bf64c612ba27eb/Spinner-1s-200px.gif'
					alt='loading gif'
					className='auth__loading-img'
				/>
				<p>Loading account details... This could take a minute</p>
			</div>
		</>
	);
}

export default AuthStrava;
