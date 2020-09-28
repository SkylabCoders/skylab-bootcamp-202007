import React, { useState, useEffect } from 'react';
import diveSiteStore from '../stores/diveSiteStore';
import diveSiteActions from '../actions/diveSiteActions';

function DiveSiteDetail(props) {
	const [diveSite, setDiveSite] = useState([]);
	const [diveSiteName, setDiveSiteName] = useState('');
	const [diveSiteLocation, setDiveSiteLocation] = useState('');

	useEffect(() => {
		diveSiteStore.addChangeListener(onChange);
		const diveSiteId = props.match.params.diveSiteId;
		if (diveSite.length === 0) {
			diveSiteActions();
		} else if (diveSiteId) {
			const MyDiveSite = diveSiteStore.getDiveSiteById(diveSiteId);
			if (diveSite) {
				setDiveSiteName(MyDiveSite.name);
				setDiveSiteLocation(diveSite.location);
			}
		}
	}, [props.match.params.diveSiteId, diveSite.length, diveSite]);

	function onChange() {
		setDiveSite(diveSiteStore.getDiveSites());
	}

	return (
		<div className='search-list'>
			<div className='search-list__info'>
				<p>
					<span>Dive Site Name:</span> {diveSiteName}
				</p>
				<p>
					<span>Location:</span> {diveSiteLocation}
				</p>
				<p>
					<span>Max Depth:</span> {diveSite.maxDepth}
				</p>
				<p>
					<span>Entry Type:</span> Boat
				</p>
			</div>
			<div className='search-list__description'>
				<p>
					<span>Description:</span> El Gat is a boat accessible salt
					water dive site, located in Roses, Spain. This dive site has
					an average rating of 5.00 out of 5 from 1 scuba divers. The
					maximum depth is 141-150ft/43-46m. The most appreciated and
					best-known dive of the south of the Nature Park. Situated at
					the point of Cap Norfeu, it is a place that is very rich in
					both fixed fauna and fish. The sea floor begins at the foot
					of a rocky wall some 10 metres down, and descends to the
					foot of a seamount some 25 metres down. Two seamounts, one
					that descends from 12 to 40 metres, the other from 8 to 45
					metres, are covered with red gorgonia and finish at a sandy
					sea floor. An exceptional dive, often with current,
					sometimes strong.
				</p>
			</div>
		</div>
	);
}

export default DiveSiteDetail;
