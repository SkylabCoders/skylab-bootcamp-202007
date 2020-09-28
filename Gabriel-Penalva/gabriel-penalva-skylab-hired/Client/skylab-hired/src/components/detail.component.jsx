import React, { useState } from 'react';
import detailStore from '../store/store';
import ICONS from '../icons/icons';
import '../styles/detail.component.style.scss';
import { editUser, addPop } from '../actions/userActions';
import { Link } from 'react-router-dom';
function getLikes(likeId) {
	const user = detailStore.getUser();
	const like = user
		? user.user_fav_list.find((current) => current === likeId)
		: null;
	return !!like;
}

function Detail({ detail }) {
	const [user, setUser] = useState({
		fav: getLikes(detail ? detail._id : false)
	});
	const [popClick, setPop] = useState(false);
	const [popularity, setPopularity] = useState(detail.entryPopularity);

	function upPop() {
		if (!popClick) {
			setPop(true);
			setPopularity(popularity + 1);
			addPop(detail);
		}
	}
	function changeFav() {
		if (user.fav) {
			setUser({ fav: false });
			let userAll = detailStore.getUser();
			userAll.user_fav_list.splice(
				userAll.user_fav_list.findIndex((current) => current === detail._id, 1)
			);
			detailStore.setUser(userAll);
			editUser(userAll);
		} else {
			setUser({ fav: true });
			let userAll = detailStore.getUser();
			userAll.user_fav_list.push(detail._id);
			detailStore.setUser(userAll);
			editUser(userAll);
		}
	}

	return detail ? (
		<div className="detail-holder  flex-col">
			<div className="detail-info-holder ">
				<div className="detail-info flex-row icon">
					<img
						className="detail-info__favorites "
						src={user.fav ? ICONS.favorite : ICONS.noFavorite}
						onClick={changeFav}
						alt="star"
						title="Favourite"
					/>
					<div className="detail-info__icons icon flex-row">
						{detail.isJunior && (
							<img src={ICONS.junior} alt="junior" title="junior" />
						)}
						{detail.isSenior && (
							<img src={ICONS.senior} alt="senior" title="senior" />
						)}
						{detail.isBackend && (
							<img src={ICONS.backend} alt="backend" title="backend" />
						)}
						{detail.isFrontend && (
							<img src={ICONS.frontend} alt="frontend" title="frontend" />
						)}
						{detail.isFullstack && (
							<img src={ICONS.fullstack} alt="fullstack" title="fullstack" />
						)}
						{detail.haveFile && (
							<img src={ICONS.file} alt="files" title="files" />
						)}
						{detail.isQuestion ? (
							<img src={ICONS.question} alt="question" title="question" />
						) : (
							<img src={ICONS.tech} alt="tech" title="Tech Test" />
						)}
					</div>
				</div>
			</div>
			<div className="detail-description">
				<p>{detail.description}</p>
			</div>
			<div className="detail-bot flex-row icon">
				{detail.entryCommentList && (
					<div>
						<Link to={`/comments/${detail._id}`}>
							<img src={ICONS.comments} alt="comments" title="comments" />
						</Link>
						<span>{detail.entryCommentList.length}</span>
					</div>
				)}

				<div>
					<img
						src={popClick ? ICONS.addPopularity : ICONS.popularity}
						onClick={upPop}
						alt="popularity"
						title="popularity"
					/>
					<span>{popularity}</span>
				</div>

				<div>
					<img src={ICONS.rating} alt="rating" title="rating" />
					<span>{detail.entryRating}</span>
				</div>
			</div>
		</div>
	) : null;
}

export default Detail;
