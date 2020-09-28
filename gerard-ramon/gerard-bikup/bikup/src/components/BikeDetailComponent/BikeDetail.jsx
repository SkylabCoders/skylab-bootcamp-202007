import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { isUserAuthWithToken } from '../../actions/authActions';

import bikeStore from '../../stores/bikeStore';
import authStore from '../../stores/authStore';

import Header from '../HeaderComponent/Header';
import CompoCard from './CompoCardComponent/CompoCard';
import StandardAside from '../StandardAside/StandardAside';

import '../../App.scss';
import './BikeDetail.scss';
import { addWorkout } from '../../actions/bikeActions';

let userCheck = false;
let isUserAuth = null;

function BikeDetail(props) {
	const [bikeDetails, setBikeDetail] = useState({});

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

		bikeStore.addChangeListener(onChange);

		if (sessionStorage.actualBike) {
			setBikeDetail(JSON.parse(sessionStorage.actualBike));
		}

		return () => bikeStore.removeChangeListener(onChange);
	}, [userCheck]);

	function onChange() {
		setBikeDetail(JSON.parse(sessionStorage.actualBike));
	}

	function hideModal() {
		document.getElementsByClassName('float__button')[0].style.visibility =
			'visible';

		document.getElementsByClassName('darken__back')[0].style.display =
			'none';
		document
			.getElementsByClassName('addworkout__container')[0]
			.classList.remove('addworkout__container-shown');
		document
			.getElementsByClassName('addworkout__container')[0]
			.classList.add('addworkout__container-hidden');
	}

	function showModal() {
		document.getElementsByClassName('float__button')[0].style.visibility =
			'hidden';

		document.getElementsByClassName('darken__back')[0].style.display =
			'block';
		document
			.getElementsByClassName('addworkout__container')[0]
			.classList.remove('addworkout__container-hidden');
		document
			.getElementsByClassName('addworkout__container')[0]
			.classList.add('addworkout__container-shown');
	}

	async function handleWorkoutClick() {
		const workoutMeters =
			document.getElementsByClassName('addworkout__km-input')[0].value *
			1000;
		const workoutHours = +document.getElementsByClassName(
			'addworkout__hours-input'
		)[0].value;
		const workoutMinutes = +document.getElementsByClassName(
			'addworkout__minutes-input'
		)[0].value;

		const workoutTotalMinutes = workoutHours * 60 + workoutMinutes;
		const updatedBikeValues = {
			workoutMeters,
			workoutTotalMinutes,
			bikeTotalMeters: bikeDetails.bikeTotalMeters + workoutMeters,
			bikeTotalMinutes:
				bikeDetails.bikeTotalMinutes + workoutTotalMinutes,
		};

		//posar el loading

		await addWorkout(updatedBikeValues);

		hideModal();

		const updateStatus = bikeStore.isBikeModified();
		if (updateStatus) {
			//Mostrar compo alerta verda amb Workout added
		} else {
			alert('We could not add your workout');
		}

		// renderitzar la pagina
		// Mostrar alerta de OK o Error
	}

	return (
		bikeDetails && (
			<>
				<Header />
				<div className='general-container'>
					<div className='desktop'>
						<StandardAside />
					</div>

					<div className='bike-detail'>
						<div className='bike-detail__upper mobile'>
							<NavLink to='/bikes'>Back</NavLink>
							<NavLink
								to={`/bikes/${bikeDetails.bikeName}/edit`}
								className='upper__edit'
							>
								Edit
							</NavLink>
						</div>

						<div className='bike-detail__head'>
							<div className='head__container'>
								<NavLink to='/bikes' className='desktop'>
									Back
								</NavLink>

								<h2 className='head__bikename'>
									{bikeDetails.bikeName || 'Your Bike'}
								</h2>
								<NavLink
									className='desktop'
									to={`/bikes/${bikeDetails.bikeName}/edit`}
								>
									Edit
								</NavLink>
							</div>
							<div className='separator'></div>

							<div className='bike-detail__km-hours'>
								<div className='km-hours km-hours__km'>
									<p className='km-hours__title'>Total KM</p>
									<div className='separator-small'></div>
									<p className='km__value'>
										{Math.round(
											bikeDetails.bikeTotalMeters / 1000
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
											bikeDetails.bikeTotalMinutes / 60
										)}
									</p>
								</div>
								<button
									className='float__button'
									onClick={showModal}
								>
									+ Workout
								</button>
							</div>
						</div>

						<div className='bike-detail__components'>
							{bikeDetails.bikeComponentList &&
								bikeDetails.bikeComponentList.map((compo) => (
									<CompoCard
										key={`compo-${compo.compoDisplayName}`}
										compoInfo={compo}
										bikeName={bikeDetails.bikeName}
									/>
								))}
						</div>

						<div className='bike-detail__details'>
							<div className='details__content'>
								<img
									src='https://image.flaticon.com/icons/svg/829/829906.svg'
									alt='bike type'
									className='details__type-img'
								/>
								<div className='details__info'>
									<p className='info__type'>
										{bikeDetails.bikeType}
									</p>
									<p>
										{bikeDetails.bikeBrand ||
											'Unknown Brand'}{' '}
										-{' '}
										{bikeDetails.bikeModel ||
											'Unknown Model'}
									</p>
									<p>
										Driving Style:{' '}
										{bikeDetails.bikeDriveStyle}
									</p>
								</div>
							</div>
						</div>

						<div className='darken__back'></div>

						<div className='addworkout__container'>
							<div className='addworkout__top'>
								<div className='flex-spacer'></div>

								<h3>Add new workout</h3>
								<div className='flex-spacer'></div>
								<p className='top__close' onClick={hideModal}>
									X
								</p>
							</div>

							<div className='bikecard__separator'></div>

							<div className='addworkout__km-container addworkout__element'>
								<label
									htmlFor='workoutKm'
									className='addworkout__label'
								>
									Distance (KM)
								</label>
								<input
									type='number'
									name='addworkout__km'
									className='addworkout__km-input addworkout__input'
									defaultValue='0'
									required
								/>
							</div>
							<div className='addworkout__time-container addworkout__element-double'>
								<div className='time__hours'>
									<label
										htmlFor='addworkout__hours'
										className='addworkout__label'
									>
										Hours
									</label>
									<input
										type='number'
										name='addworkout__hours'
										className='addworkout__hours-input addworkout__input'
										defaultValue='0'
										required
									/>
								</div>
								<div className='time__minutes'>
									<label
										htmlFor='addworkout__minutes'
										className='addworkout__label'
									>
										Minutes
									</label>
									<input
										type='number'
										name='addworkout__minutes'
										className='addworkout__minutes-input addworkout__input'
										defaultValue='0'
										required
									/>
								</div>
							</div>
							<div className='addworkout__bottom'>
								<button
									className='addworkout__button'
									onClick={handleWorkoutClick}
								>
									<div className='loading hidden'>
										<img
											src='https://trello-attachments.s3.amazonaws.com/5f4cb639a6f5eb1005114de4/5f5753c458a8b552f891bb81/af512a8cb3c1285000d1191fdaaa670c/Spinner-1s-200px_(1).gif'
											alt='loading...'
											className='loading__img'
										/>
										<p>Loading</p>
									</div>
									<div className='no-loading' Create Account>
										Add new Workout
									</div>
								</button>
							</div>
						</div>
					</div>
				</div>
			</>
		)
	);
}

export default BikeDetail;
