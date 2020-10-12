import React from 'react';
import renderer from 'react-test-renderer';
import Profile from './Profile';
import { BrowserRouter } from 'react-router-dom';

function renderProfile(arg) {
	const defaultProps = {
		match: {
			params: {}
		}
	};

	const props = { ...defaultProps, ...arg };
	return renderer.create(
		<BrowserRouter>
			<Profile {...props} />
		</BrowserRouter>
	);
}

describe('Profile', () => {
	let ProfileTree;

	beforeEach(async () => {
		ProfileTree = renderProfile();
	});

	it('should match without id', async () => {
		expect(ProfileTree).toMatchSnapshot();
    });
})