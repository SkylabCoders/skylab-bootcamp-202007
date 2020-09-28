import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { isUserAuthWithToken } from '../../actions/authActions';
import authStore from '../../stores/authStore';

import './Profile.scss';

import Header from '../HeaderComponent/Header';

let isUserAuth = null;
let userCheck = false;
let outterUserInfo = null;

function Profile() {
	let [userInfo, setUserInfo] = useState();

	const history = useHistory();

	async function handleAuthorization() {
		await checkIfUserIsAuth();
	}

	async function checkIfUserIsAuth() {
		await isUserAuthWithToken();
		isUserAuth = authStore.isUserAuth();
		if (!isUserAuth) {
			history.replace('/login');
		} else {
			userCheck = true;
			userInfo = JSON.parse(sessionStorage.authUser);
		}
	}

	useEffect(() => {
		authStore.addChangeListener(onAuthChange);
		handleAuthorization();
	}, [isUserAuth]);

	function onAuthChange() {
		isUserAuth = authStore.isUserAuth();
		isUserAuth &&
			setUserInfo((userInfo = JSON.parse(sessionStorage.authUser)));
	}

	const connectStravaButton = (
		<img
			className='strava__connect-btn'
			src='https://trello-attachments.s3.amazonaws.com/5f4cb639a6f5eb1005114de4/5f4f63b8021a9d482184baf2/3cca3ad9320164155dfbb9d09ff7982f/btn_strava_connectwith_orange%402x.png'
			alt='connect with strava'
		/>
	);

	const connectedWithStrava = (
		<p className='connected'>Connected with Strava</p>
	);

	return (
		(userInfo && (
			<>
				<Header />

				<div className='general-container'>
					<div className='profile'>
						<div className='profile__container'>
							<div className='profile__picture'>
								<img
									className='picture__img'
									src={userInfo.profilePicture}
									alt='User profile picture'
								/>
							</div>
							<div className='profile__main'>
								<h3 className='main__username'>
									{userInfo.username}
								</h3>
								<div className='main__info'>
									<p>
										{userInfo.stravaAccessToken
											? connectedWithStrava
											: connectStravaButton}
									</p>
								</div>
							</div>
							<div className='profile__edit'>
								<button className='edit__button'>
									Edit Profile
								</button>
							</div>
						</div>
					</div>
				</div>
			</>
		)) || <p>loading...</p>
	);
}

export default Profile;
