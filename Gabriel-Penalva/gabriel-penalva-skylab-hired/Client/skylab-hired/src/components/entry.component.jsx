import React, { useState, useEffect } from 'react';

import { loadDetails } from '../actions/userActions';
import Detail from './detail.component';
import detailStore from '../store/store';
import '../styles/entry.load.style.scss';
import { Link } from 'react-router-dom';

const STR = {
	SENIOR: 'senior',
	JUNIOR: 'junior',
	FRONT: 'frontend',
	BACK: 'backend',
	FULL: 'fullstack',
	TECH: 'tech',
	QUEST: 'quest'
};

function Entry({ list }) {
	const [detail, setDetail] = useState(list ? list : []);
	const search = window.location.search;
	const params = new URLSearchParams(search);
	let category = params.get('category');
	let sepeciality = params.get('spec');
	useEffect(() => {
		detailStore.addChangeListener(onChange);
		if (!list) loadDetails();

		return () => {
			return detailStore.removeChangeListener(onChange);
		};
	}, [detail.length]);

	function onChange() {
		setDetail(detailStore.getDetail());
	}
	function assert(current) {
		if (sepeciality) {
			switch (sepeciality) {
				case STR.FRONT:
					if (current.isFrontend) return true;
					break;
				case STR.BACK:
					if (current.isBackend) return true;
					break;
				case STR.FULL:
					if (current.isFullstack) return true;
					break;
				default:
					return false;
					break;
			}
		} else {
			return true;
		}
	}
	return (
		<>
			{detail.length !== 0 &&
				detail.map((current) => {
					const MATCH = <Detail key={current._id} detail={current}></Detail>;
					if (category) {
						switch (category) {
							case STR.JUNIOR:
								if (current.isJunior) {
									return assert(current) ? MATCH : null;
								}
								break;
							case STR.SENIOR:
								if (current.isSenior) {
									return assert(current) ? MATCH : null;
								}
								break;
							default:
								return null;
						}
					} else return assert(current) ? MATCH : null;
				})}
			<div className="entry-end__text">
				Dont found your question? Add newone <Link to="/addEntry">HERE!</Link>
			</div>

			{detail.length === 0 && (
				<div className="loading">
					<img
						src="https://thumbs.gfycat.com/FrailFirsthandAnnashummingbird-max-1mb.gif"
						alt="loading"
					/>
				</div>
			)}
		</>
	);
}

export default Entry;
