import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { getGitHubAuthCode } from '../../actions/loginActions';

export default withRouter(function ({ history }) {
	const [gitHubCode, setGitHubCode] = useState('');

	useEffect(() => {
		getGitHubAuthCode();
	});
	return (
		<>
			<p>Auth Works</p>
		</>
	);
});
