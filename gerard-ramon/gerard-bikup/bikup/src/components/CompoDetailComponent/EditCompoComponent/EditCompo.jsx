import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { deleteBike, editcompo } from '../../../actions/bikeActions';
import bikeStore from '../../../stores/bikeStore';

import Header from '../../HeaderComponent/Header';

import './editcompo.scss';

const bikeTypeList = [
	{ value: 'mountain', displayText: 'Mountain Bike', image: '' },
	{ value: 'road', displayText: 'Road Bike', image: '' },
	{ value: 'enduro_downhill', displayText: 'Enduro / Downhill', image: '' },
	{ value: 'gravel_cross', displayText: 'Gravel / Cross', image: '' },
];

const drivingStyleList = [
	{ value: 'soft', displayText: 'Soft', image: '' },
	{ value: 'moderate', displayText: 'Moderate', image: '' },
	{ value: 'aggressive', displayText: 'Aggressive', image: '' },
];

function getFormElements() {
	const bikeNameElement = document.getElementsByClassName(
		'editcompo__bikename'
	)[0];
	const bikeTypeElement = document.getElementsByClassName(
		'editcompo__bikeType'
	)[0];
	const drivingStyleElement = document.getElementsByClassName(
		'editcompo__driveStyle'
	)[0];
	const bikeBrandElement = document.getElementsByClassName(
		'editcompo__bikeBrand'
	)[0];
	const bikeModelElement = document.getElementsByClassName(
		'editcompo__bikeModel'
	)[0];
	const bikeTotalKmElement = document.getElementsByClassName(
		'editcompo__totalKm'
	)[0];
	const bikeTotalHoursElement = document.getElementsByClassName(
		'editcompo__totalHours'
	)[0];

	const warningElement = document.getElementsByClassName(
		'editcompo__warning'
	)[0];
	const submitButtonElement = document.getElementsByClassName(
		'editcompo__create-button'
	)[0];
	const loadingElement = document.getElementsByClassName('loading')[0];
	const noLoadingElement = document.getElementsByClassName('no-loading')[0];

	return {
		bikeNameElement,
		bikeTypeElement,
		drivingStyleElement,
		bikeBrandElement,
		bikeModelElement,
		bikeTotalKmElement,
		bikeTotalHoursElement,
		warningElement,
		submitButtonElement,
		loadingElement,
		noLoadingElement,
	};
}

function disableForm(formElements) {
	Object.entries(formElements).forEach((element) => {
		if (
			element[0] !== 'loadingElement' ||
			element[0] !== 'noLoadingElement'
		) {
			element[1].disabled = true;
		}
	});
	formElements.loadingElement.style.display = 'flex';
	formElements.noLoadingElement.style.display = 'none';
}

function enableForm(formElements) {
	Object.entries(formElements).forEach((element) => {
		if (
			element[0] !== 'loadingElement' ||
			element[0] !== 'noLoadingElement'
		) {
			element[1].disabled = false;
		}
		formElements.loadingElement.style.display = 'none';
		formElements.noLoadingElement.style.display = 'flex';
	});
}

function EditCompo() {
	const history = useHistory();
	let actualBikeInfo = null;
	if (sessionStorage.actualBike) {
		actualBikeInfo = JSON.parse(sessionStorage.actualBike);
	}

	async function validateForm() {
		const formElements = getFormElements();

		const bikeName = formElements.bikeNameElement.value;
		const bikeType = formElements.bikeTypeElement.value;
		const bikeDriveStyle = formElements.drivingStyleElement.value;
		const bikeBrand = formElements.bikeBrandElement.value;
		const bikeModel = formElements.bikeModelElement.value;
		const bikeTotalMeters = formElements.bikeTotalKmElement.value * 1000;
		const bikeTotalMinutes = formElements.bikeTotalHoursElement.value * 60;

		if (!bikeName) {
			formElements.warningElement.innerHTML = 'A bike name is required';
		} else {
			disableForm(formElements);

			let isNameChanged = null;
			bikeName === actualBikeInfo.bikeName
				? (isNameChanged = false)
				: (isNameChanged = true);

			const bikeInfo = {
				bikeName,
				bikeType,
				bikeDriveStyle,
				bikeBrand,
				bikeModel,
				bikeTotalMeters,
				bikeTotalMinutes,
			};

			try {
				await editcompo(bikeInfo, isNameChanged);
				const isBikeModified = bikeStore.isBikeModified();
				if (!isBikeModified) {
					alert('There has been an error editing your bike');
				} else {
					history.replace('/bikes');
				}
			} catch (error) {
				formElements.warningElement.innerHTML =
					'We could not edit the bike';
			}
		}
	}

	async function handleDeleteClick() {
		const confirmation = window.confirm(
			'Are you sure you want to delete this bike?'
		);

		confirmation && (await deleteBike());
		const deletionStatus = bikeStore.isBikeModified();

		if (deletionStatus) {
			history.replace('/bikes');
		} else {
			alert('There has been an error deleting your bike');
		}
	}

	return (
		actualBikeInfo && (
			<>
				<Header />
				<div className='general-container'>
					<div className='editcompo'>
						<div className='newbikeform__upper mobile'>
							<NavLink to='/bikes'>My bikes</NavLink>
						</div>
						<div className='editcompo__container'>
							<h1 className='editcompo__title'>Edit Bike</h1>
							<form className='editcompo__form'>
								<div className='editcompo__element'>
									<label
										htmlFor='bikename'
										className='editcompo__label'
									>
										Bike Name
									</label>
									<input
										type='text'
										name='bikename'
										className='editcompo__bikename editcompo__input'
										defaultValue={actualBikeInfo.bikeName}
										required
									/>
								</div>
								<div className='editcompo__element'>
									<label
										htmlFor='bikeType'
										className='editcompo__label'
									>
										Type
									</label>
									<select
										name='bikeType'
										className='editcompo__bikeType editcompo__input'
										defaultValue={actualBikeInfo.bikeType}
										required
									>
										{bikeTypeList.map((bikeType) => {
											return (
												<option value={bikeType.value}>
													{bikeType.displayText}
												</option>
											);
										})}
									</select>
								</div>
								<div className='editcompo__element'>
									<label
										htmlFor='bikeDriveStyle'
										className='editcompo__label'
									>
										Driving Style
									</label>
									<select
										type='text'
										name='bikeDriveStyle'
										className='editcompo__driveStyle editcompo__input'
										defaultValue={
											actualBikeInfo.bikeDriveStyle
										}
										required
									>
										{drivingStyleList.map(
											(drivingStyle) => {
												return (
													<option
														value={
															drivingStyle.value
														}
													>
														{
															drivingStyle.displayText
														}
													</option>
												);
											}
										)}
									</select>
								</div>
								<div className='editcompo__element'>
									<label
										htmlFor='bikeBrand'
										className='editcompo__label'
									>
										Brand
									</label>
									<input
										type='text'
										name='bikeBrand'
										className='editcompo__bikeBrand editcompo__input'
										defaultValue={actualBikeInfo.bikeBrand}
									/>
								</div>
								<div className='editcompo__element'>
									<label
										htmlFor='bikeModel'
										className='editcompo__label'
									>
										Model
									</label>
									<input
										type='text'
										name='bikeModel'
										className='editcompo__bikeModel editcompo__input'
										defaultValue={actualBikeInfo.bikeModel}
									/>
								</div>
								<div className='editcompo__element-double'>
									<div className='element-double__item'>
										<label
											htmlFor='bikeModel'
											className='editcompo__label'
										>
											Total KM
										</label>
										<input
											type='number'
											name='bikeModel'
											className='editcompo__totalKm editcompo__input'
											defaultValue={Math.round(
												actualBikeInfo.bikeTotalMeters /
													1000
											)}
										/>
									</div>
									<div className='element-double__item'>
										<label
											htmlFor='bikeModel'
											className='editcompo__label'
										>
											Total hours
										</label>
										<input
											type='number'
											name='bikeModel'
											className='editcompo__totalHours editcompo__input'
											defaultValue={Math.round(
												actualBikeInfo.bikeTotalMinutes /
													60
											)}
										/>
									</div>
								</div>
								<div className='editcompo__element'>
									<p className='editcompo__warning'></p>
								</div>
								<button
									className='editcompo__create-button'
									onClick={(event) => {
										event.preventDefault();
										validateForm();
									}}
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
										Save
									</div>
								</button>
							</form>

							<div className='register__separator'>
								<div className='line'></div>
								<span className='bold'>Or</span>
								<div className='line'></div>
							</div>
							<div className='editcompo__extra'>
								<button className='extra__addcompo-button editcompo__create-button'>
									<div className='delete-loading hidden'>
										<img
											src='https://trello-attachments.s3.amazonaws.com/5f4cb639a6f5eb1005114de4/5f5753c458a8b552f891bb81/af512a8cb3c1285000d1191fdaaa670c/Spinner-1s-200px_(1).gif'
											alt='loading...'
											className='loading__img'
										/>
										<p>Loading</p>
									</div>
									<div
										className='delete-no-loading'
										Create
										Account
									>
										Add new compo
									</div>
								</button>

								<button
									className='extra__delete-button'
									onClick={(event) => {
										event.preventDefault();
										handleDeleteClick();
									}}
								>
									<div className='delete-loading hidden'>
										<img
											src='https://trello-attachments.s3.amazonaws.com/5f4cb639a6f5eb1005114de4/5f5753c458a8b552f891bb81/af512a8cb3c1285000d1191fdaaa670c/Spinner-1s-200px_(1).gif'
											alt='loading...'
											className='loading__img'
										/>
										<p>Loading</p>
									</div>
									<div
										className='delete-no-loading'
										Create
										Account
									>
										Delete this bike
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

export default EditCompo;
