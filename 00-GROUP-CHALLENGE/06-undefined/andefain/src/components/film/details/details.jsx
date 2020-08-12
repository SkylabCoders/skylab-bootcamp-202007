import React, { useState } from 'react';
import './details.scss';
import PropTypes from 'prop-types';

const blankHeart =
	'https://trello-attachments.s3.amazonaws.com/5f294480df57d910f5d84ab9/512x512/5f83a4529179eef86fac458fd103c413/favorito.png';
const fullHeart =
	'https://trello-attachments.s3.amazonaws.com/5f294480df57d910f5d84ab9/512x512/978cb96aee01766475268b966dd68550/estrella.png';

function FilmDetails({ details }) {
	const [likeImage, setLikeImage] = useState(blankHeart);

	function onChange() {
		if (likeImage === blankHeart) setLikeImage(fullHeart);
		else setLikeImage(blankHeart);
	}

	return (
		<>
			<div className="details-container">
				<div className="details-header">
					<h1 className="film-details__title">{details.title}</h1>
					<img
						src={likeImage}
						width="30px"
						height="30px"
						className="icon-like-desktop"
						onClick={() => onChange()}
						alt="Start icon"
					/>
				</div>
				<span>{details.stars}</span>
				<div className="film-details__head">
					<span>
						<span>{!!details.year ? details.year : 'Year: pending'}</span>
						<span> | </span>
						<span>
							{!!details.runtimeStr ? details.runtimeStr : 'Duration: pending'}
						</span>
						<span> | </span>
						<span>{!!details.genres ? details.genres : 'Genres: pending'}</span>
					</span>
				</div>
				<div className="film-details__plot">
					<h3 className="plot-title">Plot</h3>
					<p className="plot-details">{details.plot}</p>
				</div>
			</div>
		</>
	);
}

FilmDetails.propTypes = {
	details: PropTypes.object
};

export default FilmDetails;
