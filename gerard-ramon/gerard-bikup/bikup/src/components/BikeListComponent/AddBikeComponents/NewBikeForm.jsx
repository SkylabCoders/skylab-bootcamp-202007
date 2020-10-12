import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import './NewBikeForm.scss';

import Header from '../../HeaderComponent/Header';
import { createNewBike } from '../../../actions/bikeActions';
import bikeStore from '../../../stores/bikeStore';

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
		'newbikeform__bikename'
	)[0];
	const bikeTypeElement = document.getElementsByClassName(
		'newbikeform__bikeType'
	)[0];
	const drivingStyleElement = document.getElementsByClassName(
		'newbikeform__driveStyle'
	)[0];
	const bikeBrandElement = document.getElementsByClassName(
		'newbikeform__bikeBrand'
	)[0];
	const bikeModelElement = document.getElementsByClassName(
		'newbikeform__bikeModel'
	)[0];
	const warningElement = document.getElementsByClassName(
		'newbikeform__warning'
	)[0];
	const submitButtonElement = document.getElementsByClassName(
		'newbikeform__create-button'
	)[0];
	const loadingElement = document.getElementsByClassName('loading')[0];
	const noLoadingElement = document.getElementsByClassName('no-loading')[0];

	return {
		bikeNameElement,
		bikeTypeElement,
		drivingStyleElement,
		bikeBrandElement,
		bikeModelElement,
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

function NewBikeForm() {
	const history = useHistory();

	async function validateForm() {
		const formElements = getFormElements();
		disableForm(formElements);
		const bikeName = formElements.bikeNameElement.value;
		const bikeType = formElements.bikeTypeElement.value;
		const bikeDriveStyle = formElements.drivingStyleElement.value;
		const bikeBrand = formElements.bikeBrandElement.value;
		const bikeModel = formElements.bikeModelElement.value;

		if (!bikeName) {
			formElements.warningElement.innerHTML = 'A bike name is required';
			enableForm(formElements);
		} else {
			const bikeInfo = {
				bikeName,
				bikeType,
				bikeDriveStyle,
				bikeBrand,
				bikeModel,
			};
			try {
				await createNewBike(bikeInfo);
				const newBike = bikeStore.getNewBike();
				if (newBike) {
					history.replace('/bikes');
				} else {
					// window.getElementsByClassName('errorAlert').style.display =
					// 	'block';
					alert('We could not create the bike');
					formElements.warningElement.innerHTML =
						'We could not create the bike';
				}
			} catch (error) {
				// Mostrar alerta error
			}
		}
	}

	return (
		<>
			<Header />
			<div className='general-container'>
				<div className='newbikeform'>
					<div className='newbikeform__upper mobile'>
						<NavLink to='/bikes'>My bikes</NavLink>
					</div>
					<div className='newbikeform-container'>
						<h1 className='newbikeform__title'>New bike</h1>
						<form className='newbikeform__form'>
							<div className='newbikeform__element'>
								<label
									htmlFor='bikename'
									className='newbikeform__label'
								>
									Bike Name
								</label>
								<input
									type='text'
									name='bikename'
									className='newbikeform__bikename newbikeform__input'
									required
								/>
							</div>
							<div className='newbikeform__element'>
								<label
									htmlFor='bikeType'
									className='newbikeform__label'
								>
									Type
								</label>
								<select
									name='bikeType'
									className='newbikeform__bikeType newbikeform__input'
									required
								>
									{bikeTypeList.map((bikeType) => {
										return (
											<option
												value={bikeType.value}
												key={bikeType.value}
											>
												{bikeType.displayText}
											</option>
										);
									})}
								</select>
							</div>
							<div className='newbikeform__element'>
								<label
									htmlFor='bikeDriveStyle'
									className='newbikeform__label'
								>
									Driving Style
								</label>
								<select
									type='text'
									name='bikeDriveStyle'
									className='newbikeform__driveStyle newbikeform__input'
									required
								>
									{drivingStyleList.map((drivingStyle) => {
										return (
											<option
												value={drivingStyle.value}
												key={drivingStyle.value}
											>
												{drivingStyle.displayText}
											</option>
										);
									})}
								</select>
							</div>
							<div className='newbikeform__element'>
								<label
									htmlFor='bikeBrand'
									className='newbikeform__label'
								>
									Brand
								</label>
								<input
									type='text'
									name='bikeBrand'
									className='newbikeform__bikeBrand newbikeform__input'
								/>
							</div>
							<div className='newbikeform__element'>
								<label
									htmlFor='bikeModel'
									className='newbikeform__label'
								>
									Model
								</label>
								<input
									type='text'
									name='bikeModel'
									className='newbikeform__bikeModel newbikeform__input'
								/>
							</div>
							<div className='newbikeform__element'>
								<p className='newbikeform__warning'></p>
							</div>
							<button
								className='newbikeform__create-button'
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
									Create Bike
								</div>
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default NewBikeForm;
