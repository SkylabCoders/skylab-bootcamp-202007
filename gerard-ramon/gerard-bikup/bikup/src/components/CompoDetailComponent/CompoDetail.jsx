import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { isUserAuthWithToken } from '../../actions/authActions';

import authStore from '../../stores/authStore';

import Header from '../HeaderComponent/Header';
import StandardAside from '../StandardAside/StandardAside';
import DetailCompoCard from './DetailCompoCardComponent/DetailCompoCard';

import './CompoDetail.scss';
import { resetCompo, deleteCompo } from '../../actions/compoActions';
import bikeStore from '../../stores/bikeStore';

let userCheck = false;
let isUserAuth = null;

function CompoDetail(props) {
	const [compoInfo, setCompoinfo] = useState({});
	const [bikeInfo, setBikeInfo] = useState({});

	const history = useHistory();

	async function handleAuthorization() {
		if (!userCheck) {
			await checkIfUserIsAuth();
		}
	}

	async function checkIfUserIsAuth() {
		await isUserAuthWithToken();
		isUserAuth = authStore.isUserAuth();
		if (!isUserAuth) {
			history.replace('/login');
		}
		userCheck = true;
	}

	useEffect(() => {
		handleAuthorization();

		if (sessionStorage.actualCompo && sessionStorage.actualBike) {
			setCompoinfo(JSON.parse(sessionStorage.actualCompo));
			setBikeInfo(JSON.parse(sessionStorage.actualBike));
		}
	}, [userCheck]);

	function onChange() {
		setCompoinfo(JSON.parse(sessionStorage.actualCompo));
		setBikeInfo(JSON.parse(sessionStorage.actualBike));
	}

	async function handleResetCompoClick() {
		await resetCompo();
		const resetStatus = bikeStore.isCompoModified();

		if (!resetStatus) {
			alert('We could not reset your compo');
		} else {
			onChange();
		}
	}

	async function handleDeleteCompoClick() {
		await deleteCompo();
		const deleteStatus = bikeStore.isCompoModified();
		if (!deleteStatus) {
			alert('We could not delete your compo');
		} else {
			history.replace(`/bikes/${bikeInfo}`);
		}
	}

	return (
		compoInfo && (
			<>
				<Header />
				<div className='general-container'>
					<div className='desktop'>
						<StandardAside />
					</div>

					<div className='compodetail'>
						<div className='compodetail__upper mobile'>
							<NavLink to={`/bikes/${bikeInfo.bikeName}`}>
								Back
							</NavLink>
							<p className='upper__edit'>Edit</p>
						</div>

						<div className='compodetail__head'>
							<div className='head__container'>
								<NavLink
									to={`/bikes/${bikeInfo.bikeName}`}
									className='desktop'
								>
									Back
								</NavLink>
								<h2 className='head__compoName'>
									{bikeInfo.bikeName} -{' '}
									{compoInfo.compoDisplayName}
								</h2>
								<button
									className='compodetail__reset desktop'
									onClick={(event) => {
										event.preventDefault();
										handleResetCompoClick();
									}}
								>
									Reset Component
								</button>
							</div>
							<div className='separator'></div>

							<div className='compodetail__km-hours'>
								<div className='km-hours km-hours__km'>
									<p className='km-hours__title'>Total KM</p>
									<div className='separator-small'></div>
									<p className='km__value'>
										{Math.round(
											compoInfo.compoAccumulatedMeters /
												1000
										)}
									</p>
								</div>
								<div className='km-hours__hours km-hours'>
									<p className='km-hours__title'>
										Total Hours
									</p>
									<div className='separator-small'></div>
									<p className='km-hours__value'>
										{Math.floor(
											compoInfo.compoAccumulatedMinutes /
												60
										)}
									</p>
								</div>
							</div>
						</div>

						<div className='compodetail__components'>
							<DetailCompoCard compoInfo={compoInfo} />
						</div>

						<div className='compodetail__details'>
							<div className='details__content'>
								<img
									src='https://image.flaticon.com/icons/svg/2623/2623442.svg'
									alt='bike type'
									className='details__type-img'
								/>
								<div className='details__info'>
									<p className='info__type'>
										{bikeInfo.bikeName} -{' '}
										{compoInfo.compoDisplayName}
									</p>
									<p>
										{compoInfo.compoBrand ||
											'Unknown brand'}{' '}
										-{' '}
										{compoInfo.compoModel ||
											'Unknown Model'}
									</p>
								</div>
							</div>
						</div>
						<button
							className='compodetail__reset mobile'
							onClick={(event) => {
								event.preventDefault();
								handleResetCompoClick();
							}}
						>
							Reset Component
						</button>
						<button
							className='compodetail__reset delete mobile'
							onClick={(event) => {
								event.preventDefault();
								handleDeleteCompoClick();
							}}
						>
							Delete Component
						</button>
					</div>
				</div>
			</>
		)
	);
}

export default CompoDetail;
