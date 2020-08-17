import React, { useState, useEffect } from 'react';
import store from '../../stores/store';
import { loadCharList } from '../../actions/actions';
import './detailsComponent.css';


import { Link } from 'react-router-dom';
function DetailsComponent(props) {
	const [chars, setChars] = useState(store.getCharacters());

	useEffect(() => {
		store.addChangeListener(onChange);
		if (chars.length === 0) loadCharList();
		return () => store.removeChangeListener(onChange);
	}, [chars.length]);

	function onChange() {
		setChars(store.getCharacters());
	}
	let char = {};
	const name = props.match.params.name;
	char = store.getCharByName(name);

	return (
		<div className="details-holder">
			<div className="flex-item">
				<div className="row">
					<div className="detail-container flex-item">
						<div className="card hovercard">
							<div className="cardheader"></div>
							<div className="avatar">
								{char && <img alt="" src={char.image}></img>}
							</div>

							<div className="info">
								<div className="title">

									<Link target="_blank" to="/">
										{char && char.name}
									</Link>
								</div>
								<div className="details-desc-content">
									<div className="details-desc">
										RACE: {char && <span>{char.species}</span>}
									</div>
									<div className="details-desc">
										STATUS: {char && <span>{char.status}</span>}
									</div>
									<div className="details-desc">
										PLANET: {char && <span>{char.originPlanet}</span>}
									</div>
									<div className="details-desc">
										GENDER: {char && <span>{char.gender}</span>}
									</div>
									<div className="details-desc">
										SERIE: {char && <span>{char.series}</span>}
									</div>

								</div>
								{char && <div >
									<Link to={`/game/${char.name}`} >
										<button className='row figthlink btn'> FIGTH!</button>
									</Link>
								</div>}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DetailsComponent;
