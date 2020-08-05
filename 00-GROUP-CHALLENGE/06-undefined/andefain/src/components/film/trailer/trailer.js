import React from 'react';
import { Link } from 'react-router-dom';
import './trailer.css';

const films = [
	{
		title: 'The Dark Knight',
		image:
			'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
		trailer:
			'https://m.media-amazon.com/images/M/MV5BNWJkYWJlOWMtY2ZhZi00YWM0LTliZDktYmRiMGYwNzczMTZhXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_CR0,45,480,270_AL_UX477_CR0,0,477,268_AL_.jpg'
	}
];

function Trailer() {
	return (
		<div className="trailer-container">
			<Link to="/film">
				<div
					className="poster"
					style={{ backgroundImage: `url(${films[0].image})` }}
				/>
			</Link>
			<Link to="/film">
				<div
					className="trailer-img"
					style={{ backgroundImage: `url(${films[0].trailer})` }}
				>
					<img
						src="https://trello-attachments.s3.amazonaws.com/5f294480df57d910f5d84ab9/512x512/5f83a4529179eef86fac458fd103c413/favorito.png"
						width="30px"
						height="30px"
						className="icon-like-mobile"
					/>
				</div>
			</Link>
			<img
				src="https://trello-attachments.s3.amazonaws.com/5f294480df57d910f5d84ab9/512x512/5f83a4529179eef86fac458fd103c413/favorito.png"
				width="30px"
				height="30px"
				className="icon-like-desktop"
			/>
		</div>
	);
}

export default Trailer;
