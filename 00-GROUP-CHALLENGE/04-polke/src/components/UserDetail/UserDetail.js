import React, { useEffect, useState } from 'react';
import './UserDetail.css';
import '../../shared/generalStyles.css';
import useruserDetailStore from '../../stores/userDetailStore';
import userDetailStore from '../../stores/userDetailStore';
import { loadRepoList } from '../../actions/userDetailActions';

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
	isUserGitHub = true;

	return (
		<div className="userdetail__container">
			<div className="userdetail__user-info"></div>
			<div className="userdetail__repo-list">
				{repoList.map((repo) => (
					<p>
						private: {repo.private.toString()} | {repo.name} |{' '}
						{repo.description} | {repo.id} | {repo.language} | {repo.lastUpdate}
					</p>
				))}
			</div>
			<div className="userdetail__repo-creation">
				{isUserGitHub ? createRepoButton : null}
			</div>
		</div>
	);
}

export default UserDetail;
