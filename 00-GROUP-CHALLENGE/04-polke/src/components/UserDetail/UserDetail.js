import React, { useEffect, useState } from 'react';
import './UserDetail.css';
import '../../shared/generalStyles.css';
import useruserDetailStore from '../../stores/userDetailStore';
import userDetailStore from '../../stores/userDetailStore';
import { loadRepoList } from '../../actions/userDetailActions';
import RepoCard from '../RepoCard/RepoCard';

function UserDetail() {
	const [repoList, setRepoList] = useState([]);
	const [userName, setUserName] = useState('gerardramonp');

	useEffect(() => {
		userDetailStore.addChangeListener(onChange);
		if (repoList.length === 0) {
			loadRepoList(userName);
		}
		console.log(repoList);

		return () => userDetailStore.removeChangeListener(onChange);
	}, [repoList.length]);

	function onChange() {
		setRepoList(userDetailStore.getRepoList());
	}

	return (
		<div className="userdetail__container">
			<RepoCard />
		</div>
	);
}

export default UserDetail;
