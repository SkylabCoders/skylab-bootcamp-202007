import React, { useEffect, useState } from 'react';
import './UserDetail.css';
import '../../shared/generalStyles.css';
import userDetailStore from '../../stores/userDetailStore';
import { loadRepoList } from '../../actions/userDetailActions';
import RepoCard from '../RepoCard/RepoCard';
import RepoCreation from './RepoCreation/RepoCreation';
import UserInfo from './UserInfo/UserInfo';
import landingStore from '../../stores/landingStore';
import { FormControl, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function UserDetail() {
	const [repoList, setRepoList] = useState([]);
	const [userName, setUserName] = useState(null);
	const [isUserGitHub, setIsUserGitHub] = useState(false);
	const [searchUsername, setSearchUsername] = useState('');
	const [searchProject, setSearchProject] = useState('');

	useEffect(() => {
		userDetailStore.addChangeListener(onChange);
		setIsUserGitHub(landingStore.isUserGitHub());
		setUserName(landingStore.getGitHubUserName());
		if (userName) {
			loadRepoList(userName);
		}

		return () => userDetailStore.removeChangeListener(onChange);
	}, [repoList.length, userName]);

	function onChange() {
		setRepoList(userDetailStore.getRepoList());
	}

	const createRepoButton = <button className="create__button">New Repo</button>;

	const repoListLayout = (
		<div className="userdetail__container">
			<div className="topContent">
				<div className="userdetail__user-info">
					{userName && <UserInfo githubUserName={userName} />}
				</div>
				<div className="userdetail__repo-list">
					{repoList.map((repo) => {
						return <RepoCard repoInfoList={repo} />;
					})}
				</div>
			</div>
			<div className="userdetail__repo-creation">
				<div className="creation__left">
					{isUserGitHub ? createRepoButton : null}
				</div>
				<div className="creation__right">
					<RepoCreation />
				</div>
			</div>
		</div>
	);

	const searchBarLayout = (
		<div className="search__container">
			<p>
				Seems you're nog logged in with GitHub,
				<strong> but you can still search for any public repo</strong>
			</p>
			<FormControl
				type="text"
				placeholder="Repo URL..."
				className="mr-sm-2 search__input"
				onKeyUp={(event) => {
					event.preventDefault();
					const URLSearch =
						document
							.getElementsByClassName('search__input')[0]
							.value.split('/') || 'Need a valid URL';
					setSearchUsername(URLSearch[3]);
					setSearchProject(URLSearch[4]);
				}}
			/>
			<Button variant="outline-info" className="searchbar--button">
				<NavLink
					to={`/repoDetail/${searchUsername}/${searchProject}`}
					className="searchbar__navlink"
				>
					Go
				</NavLink>
			</Button>
		</div>
	);

	return isUserGitHub ? repoListLayout : searchBarLayout;
}

export default UserDetail;
