import React, { useState, useEffect } from 'react';
import bikeStore from '../../stores/bikeStore';
import authStore from '../../stores/authStore';
import { loadUserBikeList } from '../../actions/bikeActions';
import { isUserAuthWithToken } from '../../actions/authActions';
import { useHistory, NavLink } from 'react-router-dom';
import { STRAVA_AUTH_FULL_URL } from '../../Constants/stravaAuth';

import Header from '../HeaderComponent/Header';
import StandardAside from '../StandardAside/StandardAside';
import BikeCard from './BikeCardComponent/BikeCard';

import '../../App.scss';
import './BikeList.scss';

let userCheck = false;
let isUserAuth = null;
let userId = '';

function BikeList(props) {
	const [bikeList, setBikeList] = useState([]);
	const bikeListtemp = [];
	const [authUser, setAuthUser] = useState();

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
			userId = JSON.parse(sessionStorage.authUser)._id;
		}
	}

	useEffect(() => {
		handleAuthorization();

		bikeStore.addChangeListener(onChange);
		authStore.addChangeListener(authChange);

		if (bikeList.length === 0) {
			loadUserBikeList(userId);
		}
		let timer = null;

		return () => {
			bikeStore.removeChangeListener(onChange);
			authStore.removeChangeListener(authChange);
			timer && clearTimeout(timer);
		};
	}, [isUserAuth]);

	function onChange() {
		debugger;
		setBikeList(bikeStore.getBikeList());
	}

	function authChange() {
		isUserAuth = authStore.isUserAuth();
		if (isUserAuth) {
			userId = JSON.parse(sessionStorage.authUser)._id;
			setAuthUser(JSON.parse(sessionStorage.authUser));
			loadUserBikeList(userId);
		}
	}

	function renderBikeList(bikeListRender) {
		const renderedBikeList = bikeListRender.map((bike) => {
			return (
				<BikeCard key={`bikelist-${bike.bikeName}`} bikeInfo={bike} />
			);
		});
		return renderedBikeList;
	}

	const connectStravaButton = (
		<a href={STRAVA_AUTH_FULL_URL}>
			<img
				className='strava__connect-btn'
				src='https://trello-attachments.s3.amazonaws.com/5f4cb639a6f5eb1005114de4/5f4f63b8021a9d482184baf2/3cca3ad9320164155dfbb9d09ff7982f/btn_strava_connectwith_orange%402x.png'
				alt='connect with strava'
			/>
		</a>
	);

	const connectedWithStrava = (
		<p className='connected'>Connected with Strava</p>
	);

	return (
		bikeList && (
			<>
				<Header />
				<div className='bikelist'>
					<div className='bikelist__content'>
						<div className='bikelist__top'>
							<h2>Your Bikes</h2>
							{authUser &&
								(authUser.stravaAccessToken
									? connectedWithStrava
									: connectStravaButton)}

							<NavLink
								className='bikelist__add--desktop desktop'
								to='/bikes/new-bike'
							>
								+ Add new bike
							</NavLink>
						</div>
						<div className='bikelist__cards'>
							{bikeList.length > 0 ? (
								renderBikeList(bikeList)
							) : (
								<div className='loadingscreen'>
									<img
										src='https://trello-attachments.s3.amazonaws.com/5f4cb639a6f5eb1005114de4/5f5753c458a8b552f891bb81/25b7845da50467b914bf64c612ba27eb/Spinner-1s-200px.gif'
										alt='loading gif'
										className='loading__giff'
									/>
									<p className='bikelist__loading'>
										Loading bike list...
									</p>
									<p className='bikelist__nobikes hidden'>
										Oops! Seems that you don't have any bike
										yet <br />
										<br />
										Try adding a new one
									</p>
								</div>
							)}
						</div>
						<NavLink
							to='/bikes/new-bike'
							className='bikelist__add mobile'
						>
							+ Add new bike
						</NavLink>
					</div>
					<div className='bikelist__challenges-giveaways'>
						<StandardAside />
					</div>
				</div>
			</>
		)
	);
}

export default BikeList;
