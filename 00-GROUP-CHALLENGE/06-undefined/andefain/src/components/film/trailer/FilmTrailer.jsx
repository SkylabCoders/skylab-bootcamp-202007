import React from 'react';
import { Link } from 'react-router-dom';
import './trailer.scss';
import PropTypes from 'prop-types';

function FilmTrailer({ trailer }) {
	debugger;
	return (
		<div className="trailer-container">
			<Link to="/film">
				<img alt="Poster" src={trailer.image} className="poster-img" />
			</Link>
			<Link to="/film">
				<img
					alt="Trailer"
					src={trailer.trailer ? trailer.trailer.thumbnailUrl : ''}
					className="trailer-img"
				/>
			</Link>
		</div>
	);
}

FilmTrailer.propTypes = {
	trailer: PropTypes.object
};

export default FilmTrailer;
