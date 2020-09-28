import React, { useState, useEffect } from 'react';

import { loadComments, loadDetails } from '../actions/userActions';
import Detail from './detail.component';
import CommentDetail from './commentDetail.compoent';
import store from '../store/store';
import '../styles/entry.load.style.scss';
let entryID;
function EntryComment({ props }) {
	const [comments, setComments] = useState([]);
	const [entry, setEntry] = useState(
		store.getOneEntry(props.match.params.entryId)
	);
	if (entry) entryID = entry._id;
	useEffect(() => {
		store.addChangeListener(onChange);
		if (entry === undefined) {
			loadDetails();
		}
		if (entry) {
			loadComments();
		}
		return () => {
			return store.removeChangeListener(onChange);
		};
	}, [entry, comments.length]);

	function onChange() {
		setEntry(store.getOneEntry(props.match.params.entryId));
		if (entry) {
			setComments(store.getUserComments(entry));
		}
		if (store.isNewComment()) {
			loadDetails();
			loadComments();
			setComments(store.getUserComments(entry));
		}
	}

	return (
		<>
			{entry && <Detail detail={entry}></Detail>}
			<CommentDetail entryId={entryID} />
			<div className="holder">
				{comments &&
					comments.map((current) => {
						return (
							<CommentDetail
								key={current._id}
								detail={current}
								entryId={entryID}
							></CommentDetail>
						);
					})}
			</div>

			{!entry && (
				<div className="loading">
					<h1>Maybe there is nothing here...</h1>
					<img
						src="https://thumbs.gfycat.com/FrailFirsthandAnnashummingbird-max-1mb.gif"
						alt="loading"
					/>
				</div>
			)}
		</>
	);
}

export default EntryComment;
