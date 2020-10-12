import React, { useState } from 'react';
import TextInput from '../common/TextInput';
import { saveDiver, updateDiver } from '../actions/diverActions';
import '../styles/CreateDiver.css';

function CreateDiver(props) {
	console.log('props', props);
	const [diverId] = useState(props.location.diver?._id);

	const [diverName, setDiverName] = useState(
		props.location.diver?.userInfo.firstName || ''
	);
	const [diverLastName, setDiverLastName] = useState(
		props.location.diver?.userInfo.lastName || ''
	);
	const [diverEmail, setDiverEmail] = useState(
		props.location.diver?.userInfo.email || 'name@example.com'
	);
	const [diverCompany, setDiverCompany] = useState(
		props.location.diver?.userInfo.company || ''
	);
	const [diverCity, setDiverCity] = useState(
		props.location.diver?.userInfo.location.city || ''
	);
	const [diverCountry, setDiverCountry] = useState(
		props.location.diver?.userInfo.location.country || ''
	);
	const [diverOrganization, setDiverOrganization] = useState(
		props.location.diver?.diveInfo.organization || ''
	);
	const [diverLevel, setDiverLevel] = useState(
		props.location.diver?.diveInfo.level || ''
	);
	const [diverNumberOfDives, setDiverNumberOfDives] = useState(
		props.location.diver?.diveInfo.numberOfDives || 0
	);

	function onFieldChange(value, setValue) {
		setValue(value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		if (!diverId) {
			saveDiver({
				userInfo: {
					firstName: diverName,
					lastName: diverLastName,
					company: diverCompany,
					email: diverEmail,
					location: { city: diverCity, country: diverCountry },
				},
				diveInfo: {
					organization: diverOrganization,
					level: diverLevel,
					numberOfDives: diverNumberOfDives,
				},
			}).then(() => {
				props.history.push(`/diver/`);
			});
		} else {
			updateDiver({
				userInfo: {
					firstName: diverName,
					lastName: diverLastName,
					company: diverCompany,
					email: diverEmail,
					location: { city: diverCity, country: diverCountry },
				},
				diveInfo: {
					organization: diverOrganization,
					level: diverLevel,
					numberOfDives: diverNumberOfDives,
				},
				_id: diverId,
			}).then(() => {
				props.history.push(`/diver/`);
			});
		}
	}

	return (
		<div className='form'>
			<form onSubmit={handleSubmit} className='form__inputs'>
				<TextInput
					name='name'
					type='text'
					label='Name'
					value={diverName}
					onChange={(event) =>
						onFieldChange(event.target.value, setDiverName)
					}
				/>

				<TextInput
					name='lastName'
					type='text'
					label='Last Name'
					value={diverLastName}
					onChange={(event) =>
						onFieldChange(event.target.value, setDiverLastName)
					}
				/>

				<TextInput
					name='email'
					type='email'
					label='email'
					value={diverEmail}
					onChange={(event) =>
						onFieldChange(event.target.value, setDiverEmail)
					}
				/>

				<TextInput
					name='company'
					type='text'
					label='Company'
					value={diverCompany}
					onChange={(event) =>
						onFieldChange(event.target.value, setDiverCompany)
					}
				/>

				<TextInput
					name='city'
					type='text'
					label='City'
					value={diverCity}
					onChange={(event) =>
						onFieldChange(event.target.value, setDiverCity)
					}
				/>

				<TextInput
					name='country'
					type='text'
					label='Country'
					value={diverCountry}
					onChange={(event) =>
						onFieldChange(event.target.value, setDiverCountry)
					}
				/>

				<TextInput
					name='organization'
					type='text'
					label='Dive Organization'
					value={diverOrganization}
					onChange={(event) =>
						onFieldChange(event.target.value, setDiverOrganization)
					}
				/>

				<TextInput
					name='level'
					type='text'
					label='Certification Level'
					value={diverLevel}
					onChange={(event) =>
						onFieldChange(event.target.value, setDiverLevel)
					}
				/>

				<TextInput
					name='numberOfDives'
					type='number'
					label='Number of Dives'
					value={diverNumberOfDives}
					onChange={(event) =>
						onFieldChange(event.target.value, setDiverNumberOfDives)
					}
				/>

				<div className='form__button'>
					<button type='submit'>Save</button>
				</div>
			</form>
		</div>
	);
}

export default CreateDiver;
