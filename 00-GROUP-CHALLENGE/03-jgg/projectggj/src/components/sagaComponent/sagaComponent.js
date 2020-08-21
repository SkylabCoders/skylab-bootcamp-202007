import React, { useState, useEffect } from 'react';
import store from '../../stores/store';
import { loadSagaList } from '../../actions/actions';
import './sagaComponent.scss';
import { Link } from 'react-router-dom';
const useBeforeFirstRender = (f) => {
	const [hasRendered, setHasRendered] = useState(false)
	useEffect(() => setHasRendered(true), [hasRendered])
	if (!hasRendered) {
		f()
	}
}
function SagaComponent(props) {


	let [sagas, setSagas] = useState(store.getSagas());
	useBeforeFirstRender(() => {
		loadSagaList();
	})
	useEffect(() => {
		store.addChangeListener(onChange);
		if (store.getSearchValue().text === '') setSagas(store.getSagas())
		return () => store.removeChangeListener(onChange);
	}, [sagas.length]);


	function onChange() {
		if (store.getSearchValue()) {
			setSagas(store.getSagasFiltered());
		} else {
			setSagas(store.getSagas());
		}
	}

	return (
		<>
			<div className="card-holder flex-item flex-col centred">
				{sagas &&
					sagas.map((saga) => (
						<Link
							className="cont"
							to={`/charList/saga/${saga.series}`}
							key={saga.series}
						>
							<div className="saga-holder banner flex-item">
								<img src={saga.image} alt="saga name"></img>
							</div>
						</Link>
					))}
			</div>
		</>
	);
}

export default SagaComponent;
