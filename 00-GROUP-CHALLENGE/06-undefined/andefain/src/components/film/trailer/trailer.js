import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './trailer.css';
import { addFav } from '../../../actions/filmActions';
import filmStore from '../../../stores/filmStore';
import PropTypes from 'prop-types';

function Trailer({ details, trailer }) {
	const [likeImage, setLikeImage] = useState(
		'https://trello-attachments.s3.amazonaws.com/5f294480df57d910f5d84ab9/512x512/5f83a4529179eef86fac458fd103c413/favorito.png'
	);

	function onChange() {
		setLikeImage(
			'https://trello-attachments.s3.amazonaws.com/5f294480df57d910f5d84ab9/512x512/978cb96aee01766475268b966dd68550/estrella.png'
		);
	}
	return (
		<div className="trailer-container">
			<Link to="/film">
				<div
					className="poster"
					style={{ backgroundImage: `url(${details.image.url})` }}
				/>
			</Link>
			<Link to="/film">
				<div
					className="trailer-img"
					style={{
						backgroundImage: `url(${trailer.resource.videos[0].image.url})`
					}}
				>
					<img
						src={likeImage}
						width="30px"
						height="30px"
						className="icon-like-mobile"
						onClick={() => onChange()}
						alt="Start icon"
					/>
				</div>
			</Link>
			<img
				src={likeImage}
				width="30px"
				height="30px"
				className="icon-like-desktop"
				onClick={() => onChange()}
				alt="Start icon"
			/>
		</div>
	);
}

Trailer.propTypes = {
	details: PropTypes.object,
	trailer: PropTypes.object
};

export default Trailer;
