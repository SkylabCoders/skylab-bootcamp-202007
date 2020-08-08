import React, { useState, useEffect } from 'react';
import store from '../../stores/store';
import { loadSagaList } from '../../actions/actions';
import './sagaComponent.css';

function SagaComponent(props) {
	let [sagas, setSagas] = useState(store.getSagas());

	useEffect(() => {
		store.addChangeListener(onChange);
		if (sagas.length === 0) loadSagaList();
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
						<a
							className="cont"
							href={`/charList/saga/${saga.series}`}
							key={saga.series}
						>
							<div className="saga-holder banner flex-item">
								<img src={saga.image} alt="saga name"></img>
							</div>
						</a>
					))}
			</div>
		</>
	);
}

export default SagaComponent;
