import React from 'react';
import renderer from 'react-test-renderer';
import Logout from './Logout';
import { BrowserRouter } from 'react-router-dom';

function renderLogout(arg) {
	const defaultProps = {
		match: {
			params: {}
		}
	};

	const props = { ...defaultProps, ...arg };
	return renderer.create(
		<BrowserRouter>
			<Logout {...props} />
		</BrowserRouter>
	);
}

describe('Logout', () => {
	let LogoutTree;

	beforeEach(async () => {
		LogoutTree = renderLogout();
	});

	it('should match without id', async () => {
		expect(LogoutTree).toMatchSnapshot();
    });
})