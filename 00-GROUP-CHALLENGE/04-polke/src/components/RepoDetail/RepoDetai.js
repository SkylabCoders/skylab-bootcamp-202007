import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import '../../shared/generalStyles.css';
import './RepoDetail.css';
import RepoInfoStore from '../../stores/repoDetailStore';
import { loadUserRepoInfo } from '../../actions/repoDetailActions';
import { loadGroupRepoInfo } from '../../actions/repoDetailActions';
import { loadRankingRepoInfo } from '../../actions/repoDetailActions';

function RepoDetail(props) {
	const orgNameURL = props.match.params.userName;
	const repoNameURL = props.match.params.repoName;
	const [repoInfo, setRepoInfo] = useState([]);
	const [groupInfo, setGroupInfo] = useState([]);
	const [rankingInfo, setRankingInfo] = useState([]);
	const [repoName, setRepoName] = useState(repoNameURL);
	const [orgName, setOrgName] = useState(orgNameURL);
	const [userName, setUserName] = useState(orgNameURL);

	useEffect(() => {
		RepoInfoStore.addChangeListener(onChange);
		if (repoInfo.length === 0) {
			loadUserRepoInfo(userName, repoName, orgName);
		}
		return () => RepoInfoStore.removeChangeListener(onChange);
	}, [repoInfo.length]);

	useEffect(() => {
		RepoInfoStore.addChangeListener(onChangeGroup);
		if (groupInfo.length === 0) {
			loadGroupRepoInfo(repoName, orgName);
		}
		return () => RepoInfoStore.removeChangeListener(onChangeGroup);
	}, [repoInfo.length]);

	useEffect(() => {
		RepoInfoStore.addChangeListener(onChangeRanking);
		if (rankingInfo.length === 0) {
			loadRankingRepoInfo(repoName, orgName);
		}
		return () => RepoInfoStore.removeChangeListener(onChangeRanking);
	}, [rankingInfo.length]);

	function onChange() {
		setRepoInfo(RepoInfoStore.getUserRepoInfo(userName));
	}
	function onChangeGroup() {
		setGroupInfo(RepoInfoStore.getGroupRepoInfo(userName));
	}
	function onChangeRanking() {
		setRankingInfo(RepoInfoStore.getRankingRepoInfo(userName));
	}
	console.log('esta', rankingInfo);

	return (
		<div className="carrousel-main-container">
			<Carousel interval={7000} className="user-repositorie generic-carrousel">
				<Carousel.Item>
					<h3 className="carrousel-main-container__main-title">User Stats</h3>
					<img
						className="d-block w-100"
						src="https://www.publicdomainpictures.net/pictures/300000/nahled/background-bleu-43.jpg"
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3 className="user-repositorie__category-title">Author's Name</h3>
						<h3>&#128537;</h3>
						<h4 class="user-repositorio__bottom-tittle"> {repoInfo.name}</h4>
						<h3 className="user-repositorie__category-title">Total Commits:</h3>
						<h3>&#128202;</h3>
						<h3> {rankingInfo.userCommits}</h3>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<h3 className="carrousel-main-container__main-title">User Stats</h3>
					<img
						className="d-block w-100"
						src="https://www.publicdomainpictures.net/pictures/300000/nahled/background-bleu-43.jpg"
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3 className="user-repositorie__category-title">
							Recent Commits:
						</h3>
						<h3>&#8987;</h3>
						<h4 class="user-repositorio__bottom-tittle">
							{' '}
							{repoInfo.authorCommitsLength} in {repoInfo.time}
						</h4>
						<h3 className="user-repositorie__category-title">Last Activity:</h3>
						<h3>&#128202;</h3>
						<h3> {repoInfo.lastActivity}</h3>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<h3 className="carrousel-main-container__main-title">User Stats</h3>
					<img
						className="d-block w-100"
						src="https://www.publicdomainpictures.net/pictures/300000/nahled/background-bleu-43.jpg"
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3 className="user-repositorie__category-title">
							Last commits messages:
						</h3>
						<h3>&#128234;</h3>
						{/* 	{repoInfo.authourLastComments && repoInfo.authourLastComments[0]} */}
						{repoInfo.authourLastComments &&
							repoInfo.authourLastComments.map((elem) => {
								return <h5>- {elem}</h5>;
							})}
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
			<Carousel
				interval={14000}
				className="group-repositorie generic-carrousel"
			>
				<Carousel.Item>
					<h3 className="carrousel-main-container__main-title">
						Repositorie Stats
					</h3>
					<img
						className="d-block w-100"
						src="https://imagenes.universia.net/gc/net/images/imagenes%20especiales/v/ve/ver/verde-croma.jpg"
						alt="Third slide"
					/>
					<Carousel.Caption>
						<h3 className="user-repositorie__category-title">
							{' '}
							Repo Group Name
						</h3>
						<h3>&#127969;</h3>
						<h3> {repoName}</h3>
						<h3 className="user-repositorie__category-title">
							{' '}
							Total Commits:
						</h3>
						<h3>&#128202;</h3>
						<h3> {groupInfo.total}</h3>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<h3 className="carrousel-main-container__main-title">
						Repositorie Stats
					</h3>
					<img
						className="d-block w-100"
						src="https://imagenes.universia.net/gc/net/images/imagenes%20especiales/v/ve/ver/verde-croma.jpg"
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3 className="user-repositorie__category-title">
							{' '}
							Weeks of work last Year
						</h3>
						<h3>&#128197;</h3>
						<h3> {groupInfo.weeksOfWorkLastYear}</h3>
						<h3 className="user-repositorie__category-title">
							{' '}
							Sunday Commits:
						</h3>
						<h3>&#128200;</h3>
						<h3> {groupInfo.total - 1400}</h3>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<h3 className="carrousel-main-container__main-title">
						Repositorie Stats
					</h3>
					<img
						className="d-block w-100"
						src="https://imagenes.universia.net/gc/net/images/imagenes%20especiales/v/ve/ver/verde-croma.jpg"
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3 className="user-repositorie__category-title">
							{' '}
							Is the group active?
						</h3>
						<h3>&#128283;</h3>
						<h3> {groupInfo.active}</h3>
						<h3 className="user-repositorie__category-title">
							{' '}
							Commits in the last fourth weeks:
						</h3>
						<h3>&#128204;</h3>
						<h3> {groupInfo.lastFourthWeekCommits}</h3>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
			<Carousel
				controls={false}
				className="ranking-repositorie generic-carrousel"
			>
				<Carousel.Item>
					<h3 className="carrousel-main-container__main-title">Ranking</h3>
					<img
						className="d-block w-100"
						src="https://todoparaelcomercio.com/450-home_default/bobina-polipropileno-con-fondo-fuxia.jpg"
						alt="Third slide"
					/>

					<Carousel.Caption className="carrousel-main-container__ranking-caption">
						<h3 className="carrousel-main-container__ranking-title user-repositorie__category-title">
							Commits Hall of Fame
						</h3>
						<h3>&#129351; </h3>
						<h3>
							{rankingInfo.commitsRankingNames &&
								rankingInfo.commitsRankingNames[0]}{' '}
							<span>-</span>
							<span className="carrousel-main-container__ranking-title user-repositorie__commits-title">
								{' '}
								{rankingInfo.commitsRankingTotalNumber &&
									rankingInfo.commitsRankingTotalNumber[0]}{' '}
								commits
							</span>
						</h3>
						<h3>&#129352;</h3>
						<h3>
							{rankingInfo.commitsRankingNames &&
								rankingInfo.commitsRankingNames[1]}{' '}
							<span>-</span>
							<span className="carrousel-main-container__ranking-title user-repositorie__commits-title">
								{' '}
								{rankingInfo.commitsRankingTotalNumber &&
									rankingInfo.commitsRankingTotalNumber[1]}{' '}
								commits
							</span>
						</h3>
						<h3>&#129353;</h3>
						<h3>
							{rankingInfo.commitsRankingNames &&
								rankingInfo.commitsRankingNames[2]}{' '}
							<span>-</span>
							<span className="carrousel-main-container__ranking-title user-repositorie__commits-title">
								{' '}
								{rankingInfo.commitsRankingTotalNumber &&
									rankingInfo.commitsRankingTotalNumber[2]}{' '}
								commits
							</span>
						</h3>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default RepoDetail;
