import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import diveSiteActions from '../actions/diveSiteActions';
import diveSiteStore from '../stores/diveSiteStore';
import diveFlag from '../images/dive-flag.jpg';
import '../styles/DiveSiteList.css';

function DiveSiteList() {
	const [diveSites, setDiveSites] = useState([]);

	useEffect(() => {
		diveSiteStore.addChangeListener(onChange);
		if (diveSites.length === 0) {
			diveSiteActions();
		}
		return () => diveSiteStore.removeChangeListener(onChange);
	}, [diveSites.length]);

	function onChange() {
		setDiveSites(diveSiteStore.getDiveSites());
	}
	return (
		<>
			<h2>Dive Sites</h2>
			{diveSites.map((diveSite) => {
				return (
					<Link to={`/dive-site/${diveSite._id}`} key={diveSite._id}>
						<div className='search-list'>
							<div className='search-list__card'>
								<div>
									<img src={diveFlag} alt='profile' />
								</div>
								<p>
									<span>Dive Site Name:</span> {diveSite.name}
								</p>
							</div>
						</div>
					</Link>
				);
			})}
		</>
	);
}

export default DiveSiteList;
