import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './topFilmList.scss';

function TopFilmList({ title, data }) {
	return (
		<div className="list">
			<h2 className="list__title">{title}</h2>
			{data.map((element, i) => {
				return (
					<Link
						to={'film/' + element.id.split('/')[2]}
						className="list__item"
						key={i}
					>
						<div className="item__details">
							<img
								src={
									!!element.image
										? element.image.url
										: 'https://www.filmaffinity.com/imgs/movies/noimgfull.jpg'
								}
								className="details__img"
								alt="Poster film"
							></img>
							<div className="details__text">
								<h3>{element.title}</h3>
								<h5>{element.year}</h5>
							</div>
						</div>
					</Link>
				);
			})}
		</div>
	);
}

export default TopFilmList;

TopFilmList.propTypes = {
	data: PropTypes.array
};
