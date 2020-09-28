import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { loadDivers } from '../actions/diverActions';
import diverStore from '../stores/diverStore';
import profile from '../images/profile-placeholder.jpg';
import '../styles/DiverList.css';

function DiverList() {
	const [divers, setDivers] = useState([]);

	useEffect(() => {
		diverStore.addChangeListener(onChange);
		if (divers.length === 0) {
			loadDivers();
		}
		return () => diverStore.removeChangeListener(onChange);
	}, [divers.length]);

	function onChange() {
		setDivers(diverStore.getDivers());
	}
	return (
		<>
			<h2>Divers</h2>
			<ul>
				{divers.map((diver) => {
					// debugger;
					return (
						<Link to={`/diver/${diver._id}`} key={diver._id}>
							<div className='search-list'>
								{/* <div className='profile__background'></div> */}
								<div className='search-list__card'>
									<div>
										<img src={profile} alt='profile' />
									</div>
									<div className='search-list__card__info'>
										<li className='card__info__name'>
											{diver.userInfo.firstName}{' '}
											{diver.userInfo.lastName}
										</li>
										<p className='card__info__company'>
											Company:{' '}
											{diver.userInfo.company
												? diver.userInfo.company
												: 'N/A'}
										</p>
										<div className='card__info__location'>
											<p>
												City:{' '}
												{diver.userInfo.location.city}
											</p>
											<p>
												Country:{' '}
												{
													diver.userInfo.location
														.country
												}
											</p>
										</div>
									</div>
								</div>
							</div>
						</Link>
					);
				})}
			</ul>
		</>
	);
}

export default DiverList;
