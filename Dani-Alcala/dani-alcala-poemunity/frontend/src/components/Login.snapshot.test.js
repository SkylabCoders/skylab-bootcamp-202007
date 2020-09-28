import React from 'react';
import renderer from 'react-test-renderer';
import Login from './Login';
import { BrowserRouter } from 'react-router-dom';

function renderLogin(arg) {
	const defaultProps = {
		match: {
			params: {}
		}
	};

	const props = { ...defaultProps, ...arg };
	return renderer.create(
		<BrowserRouter>
			<Login {...props} />
		</BrowserRouter>
	);
}

describe('Login', () => {
	let LoginTree;

	beforeEach(async () => {
		LoginTree = renderLogin();
	});

	it('should match without id', async () => {
		expect(LoginTree).toMatchSnapshot();
    });
})