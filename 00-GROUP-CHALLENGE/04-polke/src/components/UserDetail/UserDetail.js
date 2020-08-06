import React, { useEffect, useState } from 'react';
import './UserDetail.css';
import '../../shared/generalStyles.css';
import useruserDetailStore from '../../stores/userDetailStore';
import userDetailStore from '../../stores/userDetailStore';
import { loadRepoList } from '../../actions/userDetailActions';
import RepoCard from '../RepoCard/RepoCard';
import UserInfo from './UserInfo/UserInfo';
import landingStore from '../../stores/landingStore';

function UserDetail() {
	const [repoList, setRepoList] = useState([]);
	const [userName, setUserName] = useState(null);
	const [isUserGitHub, setIsUserGitHub] = useState(false);

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

	const createRepoButton = <button>New Repo</button>;

	return (
		<div className="userdetail__container">
			<div className="userdetail__user-info">
				{console.log(userName)}
				{userName && <UserInfo githubUserName={userName} />}
			</div>
			<div className="userdetail__repo-list">
				{repoList.map((repo) => {
					return <RepoCard repoInfoList={repo} />;
				})}
			</div>
			<div className="userdetail__repo-creation">
				{isUserGitHub ? createRepoButton : null}
			</div>
		</div>
	);
}

export default UserDetail;
