import React from 'react';
import { Link } from 'react-router-dom';
import './trailer.css';
import PropTypes from 'prop-types';

function Trailer({ details, trailer }) {
	return (
		<div className="trailer-container">
			<Link to="/film">
				<img
					src={details.image.url}
					className="poster"
					//style={{ backgroundImage: `url(${details.image.url})` }}
				/>
			</Link>
			<Link to="/film">
				<img
					src={trailer.resource.videos[0].image.url}
					className="trailer-img"
					//style={{backgroundImage: `url(${trailer.resource.videos[0].image.url})`}}
				/>
			</Link>
		</div>
	);
}

Trailer.propTypes = {
	details: PropTypes.object,
	trailer: PropTypes.object
};

export default Trailer;
