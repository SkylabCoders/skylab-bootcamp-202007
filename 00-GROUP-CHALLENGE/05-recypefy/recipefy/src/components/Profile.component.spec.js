import ProfileComponent from './ProfileComponent';
import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

function renderProfileComponent() {
	return renderer.create(
		<Router>
			<ProfileComponent />
		</Router>
	);
}

describe('Profile Component', () => {
	const profileComponent = renderProfileComponent();

	it('should match with snapshot', () => {
		expect(profileComponent).toMatchSnapshot();
	});
});
