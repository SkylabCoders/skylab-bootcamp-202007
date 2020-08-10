import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import store from '../../stores/store';
import './charListComponent.css';
import { loadCharList } from '../../actions/actions';

const useBeforeFirstRender = (f) => {
	const [hasRendered, setHasRendered] = useState(false)
	useEffect(() => setHasRendered(true), [hasRendered])
	if (!hasRendered) {
		f()
	}
}


function CharListComponent(props) {

	let [chars, setChars] = useState(store.getCharacters());

	let [, , , , filter, name] = window.location.href.split('/');

	useBeforeFirstRender(() => {
		loadCharList(filter, name)
	})
	useEffect(() => {
		store.addChangeListener(onChange);
		if (store.getSearchValue().text === '') {
			setChars(store.getCharactersFiltered());
		}

		return () => {
			store.removeChangeListener(onChange)
		};
	}, [chars.length, name, filter]);

	function onChange() {
		if (store.getSearchValue()) {
			setChars(store.getCharactersFiltered());
		} else {
			setChars(store.getCharacters());
		}
	}

	return (
		<>
			<div className="card-holder">
				{chars &&
					chars.map((char) => (
						<Link key={char._id} to={`/details/${char.name}`}>
							<div className="card father-card">
								<div className="row no-gutters hinherit">
									<div className="hinherit img-holder">
										<img src={char.image} className="card-img " alt="..."></img>
									</div>
									<div className="card-body">
										<h2 className="card-title">{char.name}</h2>
									</div>
								</div>
							</div>
						</Link>
					))}
			</div>
		</>
	);

}

export default CharListComponent;
