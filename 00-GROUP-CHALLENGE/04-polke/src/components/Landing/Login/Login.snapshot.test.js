import renderer from 'react-test-renderer';
import Login from './Login';
import React from 'react';
import BrowserRouter from 'react-router-dom';

describe('Login snapshot', () => {
	const tree = renderer.create(
		<BrowserRouter>
			<Login />
		</BrowserRouter>
	);
	it('should match', () => {
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
