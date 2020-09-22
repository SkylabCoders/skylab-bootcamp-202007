import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { getGitHubAuthCode } from '../../actions/loginActions';
import landingStore from '../../stores/landingStore';

import './AuthComp.css';

export default withRouter(function ({ history }) {
	const [gitHubCode, setGitHubCode] = useState('');

	useEffect(() => {
		landingStore.addChangeListener(onChange);
		getGitHubAuthCode();
		gitHubCode ? history.push('./userDetail') : history.push('');
	});

	function onChange() {
		setGitHubCode(landingStore.getGitHubAccessToken);
	}

	return (
		<div className="auth__container">
			<img
				src={require('../../assets/img/loading.gif')}
				alt="loading..."
				className="auth__loading"
			></img>

			<script
				type="text/javascript"
				async
				src="https://tenor.com/embed.js"
			></script>
			<h4>Waiting for GitHub response...</h4>
		</div>
	);
});
