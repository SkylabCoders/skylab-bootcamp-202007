import React from 'react';
import { NavLink } from 'react-router-dom';
import './BikeCard.scss';

function calculateLifePercent(component) {
	const { compoLife, compoAccumulatedMeters } = component;

	return compoAccumulatedMeters / compoLife;
}

function checkSoonRepair(componentList) {
	const compoPercents = componentList.map((compo) => {
		const percent = calculateLifePercent(compo);
		return { [compo.compoType]: percent };
	});

	compoPercents.sort(function (a, b) {
		return Object.values(b)[0] - Object.values(a)[0];
	});

	return componentList.find((compo) => {
		return compo.compoType === Object.keys(compoPercents[0])[0];
	});
}

function BikeCard({ bikeInfo }) {
	let soonCompo = null;
	function handleClick(bikeId) {
		sessionStorage.actualBike = JSON.stringify(bikeInfo);
	}

	if (bikeInfo.bikeComponentList) {
		soonCompo = checkSoonRepair(bikeInfo.bikeComponentList);
	}
	return (
		(soonCompo && (
			<div className='bikecard__container'>
				<div className='bikecard'>
					<div className='bikecard__top'>
						<p className='top__name'>{bikeInfo.bikeName}</p>
						<p className='top__km'>
							{Math.round(bikeInfo.bikeTotalMeters / 1000)} Km
						</p>
					</div>
					<div className='bikecard__separator'></div>
					<div className='bikecard__repair'>
						<div className='repair__labbels'>
							<p>Check Soon</p>
							<p className='labbels__value'>
								(
								{Math.round(
									soonCompo.compoAccumulatedMeters / 1000
								)}{' '}
								/{soonCompo.compoLife / 1000} Km)
							</p>
						</div>
						<div className='repair__progress'>
							<p className='displayName'>
								{soonCompo.compoDisplayName}
							</p>
							<progress
								id='bikecard_progress'
								value={soonCompo.compoAccumulatedMeters / 1000}
								max={soonCompo.compoLife / 1000}
							></progress>
						</div>
					</div>
					<div className='bikecard__bottom'>
						<div className='bottom__likes'>
							<img
								className='likes__img'
								src='https://trello-attachments.s3.amazonaws.com/5f4cb639a6f5eb1005114de4/5f4f9c254b020643891c14bc/90b81067b9d4a63e2284da24c9994e7f/heart.png'
								alt='likes'
							/>
							<span className='likes__count'>
								{bikeInfo.bikeLikes}
							</span>
						</div>
						<div className='bottom__details'>
							<NavLink
								className='details__button'
								to={`/bikes/${bikeInfo.bikeName.replace(
									/ /g,
									''
								)}`}
								onClick={() => handleClick(bikeInfo._id)}
							>
								Go to Bike
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		)) || <p>Oops! We couldn't load {bikeInfo.bikeName}...</p>
	);
}

export default BikeCard;
