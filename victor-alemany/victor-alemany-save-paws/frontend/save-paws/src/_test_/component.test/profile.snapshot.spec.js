import React from 'react';
import renderer from 'react-test-renderer';
import Profile from '../../components/profile';
import { BrowserRouter } from 'react-router-dom';

describe('Alert List snapshot', () => {
	const profileTree = renderer.create(
		<BrowserRouter>
			<Profile />
		</BrowserRouter>
	);

	it('should match', () => {
        expect(profileTree).toMatchSnapshot();
	});
});