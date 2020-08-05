import React from 'react';
import './names.css';
import film from '../film.mock';

const darkKnight = [...film][0];

function FilmNames() {
	return (
		<>
			<div className="film-names">
				<div className="film-names__cast">
					<div className="cast-actor">
						<img className="names-img" src={darkKnight.actors[0].img} />
						<h4>{darkKnight.actors[0].name}</h4>
						<p>Actor</p>
					</div>
					<div className="cast-actor">
						<img className="names-img" src={darkKnight.actors[1].img} />
						<h4>{darkKnight.actors[1].name}</h4>
						<p>Actor</p>
					</div>
					<div className="cast-actor">
						<img className="names-img" src={darkKnight.actors[2].img} />
						<h4>{darkKnight.actors[2].name}</h4>
						<p>Actor</p>
					</div>
				</div>
				<div className="film-names__crew">
					<div className="crew-director">
						<img className="names-img" src={darkKnight.director.img} />
						<h4>{darkKnight.director.name}</h4>
						<p>Director</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default FilmNames;
