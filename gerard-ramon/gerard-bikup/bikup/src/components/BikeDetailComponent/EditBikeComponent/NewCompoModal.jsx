import React from 'react';
import { useHistory } from 'react-router-dom';

import { createNewCompo } from '../../../actions/compoActions';
import bikeStore from '../../../stores/bikeStore';

import './NewCompoModal.scss';

const compoTypes = [
	{ compoType: 'chain', compoDisplayName: 'Chain' },
	{ compoType: 'cassette', compoDisplayName: 'Cassette' },
	{
		compoType: 'chainRing',
		compoDisplayName: 'Chain Ring',
	},
	{
		compoType: 'frontTyre',
		compoDisplayName: 'Front Tyre',
	},
	{
		compoType: 'rearTyre',
		compoDisplayName: 'Rear Tyre',
	},
	{
		compoType: 'frontBrakePads',
		compoDisplayName: 'Front brake pads',
	},
	{
		compoType: 'rearBrakePads',
		compoDisplayName: 'Rear brake pads',
	},
	{
		compoType: 'rearDerailleur',
		compoDisplayName: 'Rear derailleur',
	},
	{
		compoType: 'frontDerailleur',
		compoDisplayName: 'Front derailleur',
	},
];

function NewCompoModal(bikeName) {
	const history = useHistory();

	function getFormElements() {
		const compoTypeElement = document.getElementsByClassName(
			'main__compoType'
		)[0];
		const compoBrandElement = document.getElementsByClassName(
			'newcompo__brand'
		)[0];
		const compoModelElement = document.getElementsByClassName(
			'newcompo__model'
		)[0];
		const compoLifeElement = document.getElementsByClassName(
			'newcompo__life'
		)[0];
		const warningElement = document.getElementsByClassName(
			'login__warning'
		)[0];
		const buttonElement = document.getElementsByClassName(
			'newcompo__createbutton'
		)[0];

		return {
			compoTypeElement,
			compoBrandElement,
			compoModelElement,
			compoLifeElement,
			warningElement,
			buttonElement,
		};
	}

	function hideModal() {
		document.getElementsByClassName('darken__back')[0].style.display =
			'none';
		document
			.getElementsByClassName('newcompomodal')[0]
			.classList.remove('newcompomodal-show');
		document
			.getElementsByClassName('newcompomodal')[0]
			.classList.add('newcompomodal-hide');
	}

	async function handleCreateCompoClick() {
		const formElements = getFormElements();

		const compoType = formElements.compoTypeElement.value;
		const compoBrand = formElements.compoBrandElement.value;
		const compoModel = formElements.compoModelElement.value;
		const compoLife = formElements.compoLifeElement.value * 1000;

		if (!compoLife) {
			formElements.warningElement.innerHTML =
				'A compo life value is required';
		} else {
			const compoInfo = {
				compoType,
				compoBrand,
				compoModel,
				compoLife,
			};
			await createNewCompo(compoInfo);

			const createdCompo = bikeStore.getCompoDetail();

			if (!createdCompo) {
				alert('We could not create the new compo');
			} else {
				hideModal();
				history.replace(`/bikes/${bikeName}`);
			}
		}
	}
	return (
		bikeName && (
			<>
				<div className='newcompo__container'>
					<div className='newcompo__top'>
						<div className='flex-spacer'></div>

						<h3>Add new component</h3>
						<div className='flex-spacer'></div>
						<p
							className='top__close'
							onClick={(event) => {
								event.preventDefault();
								hideModal();
							}}
						>
							X
						</p>
					</div>
					<div className='newcompo__main'>
						<label htmlFor='compoType'>Type</label>
						<select
							name='compoType'
							className='main__compoType newcompo__input'
						>
							{compoTypes.map((compo) => {
								return (
									<option value={compo.compoType}>
										{compo.compoDisplayName}
									</option>
								);
							})}
						</select>

						<label htmlFor='compoBrand'>Brand</label>
						<input
							type='text'
							name='compoBrand'
							className='newcompo__brand newcompo__input'
						/>

						<label htmlFor='compoModel'>Model</label>
						<input
							type='text'
							name='compoModel'
							className='newcompo__model newcompo__input'
						/>

						<label htmlFor='compoLife'>Life (in Km)</label>
						<input
							type='number'
							name='compoLife'
							className='newcompo__life newcompo__input'
						/>
					</div>
					<div className='login__warning '></div>
					<div className='newcompo__bottom'>
						<button
							className='newcompo__createbutton'
							onClick={(event) => {
								event.preventDefault();
								handleCreateCompoClick();
							}}
						>
							Create Compo
						</button>
					</div>
				</div>
			</>
		)
	);
}

export default NewCompoModal;
