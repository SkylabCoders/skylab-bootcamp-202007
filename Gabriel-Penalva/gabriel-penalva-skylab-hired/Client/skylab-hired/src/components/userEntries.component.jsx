import React, { useState, useEffect } from 'react';

import { loadEntries } from '../actions/userActions';
import Detail from './detail.component';
import store from '../store/store';
import '../styles/entry.load.style.scss';

function UserEntries({ type }) {
	const [detail, setDetail] = useState([]);
	const usu = store.getUser();
	useEffect(() => {
		store.addChangeListener(onChange);
		if (detail.length === 0) {
			loadEntries(type, usu._id);
		}
		return () => {
			return store.removeChangeListener(onChange);
		};
	}, [detail.length]);

	function onChange() {
		setDetail(store.getEntriesDetail());
	}

	return (
		<div className="spacer">
			{detail.length !== 0 &&
				detail.map((current) => {
					return <Detail key={current._id} detail={current}></Detail>;
				})}

			{detail.length === 0 && (
				<div className="loading">
					<h1>Maybe there is nothing here...</h1>
					<img
						src="https://thumbs.gfycat.com/FrailFirsthandAnnashummingbird-max-1mb.gif"
						alt="loading"
					/>
				</div>
			)}
		</div>
	);
}

export default UserEntries;
