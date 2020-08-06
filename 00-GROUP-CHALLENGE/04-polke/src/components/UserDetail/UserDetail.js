import React, { useEffect, useState } from 'react';
import './UserDetail.css';
import '../../shared/generalStyles.css';
import useruserDetailStore from '../../stores/userDetailStore';
import userDetailStore from '../../stores/userDetailStore';
import { loadRepoList } from '../../actions/userDetailActions';
import RepoCard from '../RepoCard/RepoCard';
import UserInfo from './UserInfo/UserInfo';

function UserDetail({ isUserGitHub }) {
	const [repoList, setRepoList] = useState([]);
	const [userName, setUserName] = useState('gerardramonp');

	useEffect(() => {
		userDetailStore.addChangeListener(onChange);
		if (repoList.length === 0) {
			loadRepoList(userName);
		}

		return () => userDetailStore.removeChangeListener(onChange);
	}, [repoList.length]);

	function onChange() {
		setRepoList(userDetailStore.getRepoList());
	}

	const createRepoButton = <button>New Repo</button>;
<<<<<<< HEAD
	isUserGitHub = false;
=======
>>>>>>> e2d1c34deb4b03414db6bfe9f3af6ad32f5d37ed

	return (
		<div className="userdetail__container">
			<div className="userdetail__user-info">
				<UserInfo />
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
