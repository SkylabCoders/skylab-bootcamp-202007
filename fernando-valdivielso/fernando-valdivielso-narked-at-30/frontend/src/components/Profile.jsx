import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { loadDivers, deleteDiver } from '../actions/diverActions';
import diverStore from '../stores/diverStore';
import '../styles/Profile.css';
import profile from '../images/profile-placeholder.jpg';

function Profile(props) {
	const [diver, setDiver] = useState('');
	const [divers, setDivers] = useState(diverStore.getDivers());
	const [diverName, setDiverName] = useState('');
	const [diverLastName, setdiverLastName] = useState('');
	const [diverCompany, setdiverCompany] = useState(null);
	const [diverCity, setDiverCity] = useState('');
	const [diverCountry, setDiverCountry] = useState('');
	const [diverOrganization, setdiverOrganization] = useState('');
	const [diverCertLevel, setDiverCertLevel] = useState('');
	const [diverNumberOfDives, setDiverNumberOfDives] = useState(0);

	useEffect(() => {
		diverStore.addChangeListener(onChange);
		const diverId = props.match.params.diverId;
		if (divers.length === 0) {
			loadDivers();
		} else if (diverId) {
			const MyDiver = diverStore.getDiverById(diverId);
			if (MyDiver) {
				setDiverName(MyDiver.userInfo.firstName);
				setdiverLastName(MyDiver.userInfo.lastName);
				setdiverCompany(MyDiver.userInfo.company);
				setdiverOrganization(MyDiver.diveInfo.organization);
				setDiverCertLevel(MyDiver.diveInfo.level);
				setDiverNumberOfDives(MyDiver.diveInfo.numberOfDives);
				setDiverCity(MyDiver.userInfo.location.city);
				setDiverCountry(MyDiver.userInfo.location.country);
				setDiver(MyDiver);
			}
		}

		return () => diverStore.removeChangeListener(onChange);
	}, [divers.length, props.match.params.diverId]);

	function onChange() {
		setDivers(diverStore.getDivers());
	}

	function onDelete(event, diverId) {
		event.preventDefault();
		deleteDiver(diverId);
		props.history.push('/diver');
	}

	return (
		<div className='profile'>
			<div className='profile__background'></div>
			<div className='profile__card'>
				<div className='profile__card__user'>
					<div className='user__picture'>
						<img src={profile} alt='profile' />
					</div>
					<div className='user__user__info'>
						<h2>
							{diverName} {diverLastName}
						</h2>
						<p>Company: {diverCompany ? diverCompany : 'N/A'}</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Vestibulum ut blandit enim. Lorem ipsum dolor
							sit amet, consectetur adipiscing elit.
						</p>
					</div>
				</div>
				<div className='profile__card__diver'>
					<div className='card__diver-info'>
						Dive information
						<p>Organization: {diverOrganization}</p>
						<p>Certification Level: {diverCertLevel}</p>
						<p>Number of Dives: {diverNumberOfDives}</p>
					</div>
					<div className='card__diver-location'>
						Location
						<p>City: {diverCity}</p>
						<p>Country: {diverCountry}</p>
					</div>
				</div>
			</div>
			<div className='profile__buttons'>
				<button
					onClick={(event) => onDelete(event, diver._id)}
					className='profile__buttons__delete'>
					Delete Profile
				</button>
				<Link to={{ pathname: '/create-diver', diver }}>
					<button className='profile__buttons__edit'>
						Edit Profile
					</button>
				</Link>
			</div>
		</div>
	);
}

export default Profile;
