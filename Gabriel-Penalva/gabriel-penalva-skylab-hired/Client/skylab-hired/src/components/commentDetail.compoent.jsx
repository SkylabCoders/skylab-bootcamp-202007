import React, { useState } from 'react';
import detailStore from '../store/store';
import ICONS from '../icons/icons';
import { addCommentActions, addLike } from '../actions/userActions';
import '../styles/detail.component.style.scss';
let entryID;
function CommentDetail({ detail, entryId }) {
	const user = detailStore.getUser(detailStore.getUser());
	const [likeClick, setLike] = useState(true);
	const [textComment, setTextComment] = useState('');

	if (entryId) {
		entryID = entryId;
	}
	function likeUp() {
		if (likeClick) {
			setLike(false);
			detail.likes++;
			addLike(detail);
		}
	}

	function submitText() {
		setTextComment('');
		addCommentActions(user._id, textComment, entryID);
	}
	return detail ? (
		<div className="detail-holder comment-holder  flex-col">
			<div className="detail-description">
				<p>{detail.text}</p>
			</div>
			<div className="detail-bot flex-row icon">
				<div>
					<img
						src={ICONS.like}
						onClick={likeUp}
						alt="popularity"
						title="popularity"
					/>
					<span>{detail.likes}</span>
				</div>
			</div>
		</div>
	) : (
		<div className="detail-holder comment-holder  flex-col">
			<form onSubmit={submitText} action="javascript:void(0);">
				<div className="comment-button">
					<label htmlFor="text">
						<textarea
							placeholder="Your comment here..."
							className="detail-description comment-input"
							onChange={(event) => setTextComment(event.target.value)}
							value={textComment}
							type="text"
							name="text"
							id="text"
						/>
					</label>
					<label htmlFor="user">
						<input type="hidden" name="user" value={user} />
					</label>
					<input className="inputSubmit" type="submit" value="SUBMIT"></input>
				</div>
			</form>
		</div>
	);
}

export default CommentDetail;
