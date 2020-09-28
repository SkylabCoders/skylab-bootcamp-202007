import React from 'react';
import renderer from 'react-test-renderer';
import UserCreated from '../../components/userCreated';
import { BrowserRouter } from 'react-router-dom';

describe('Alert List snapshot', () => {
	const userCreatedTree = renderer.create(
		<BrowserRouter>
			<UserCreated />
		</BrowserRouter>
	);

	it('should match', () => {
        expect(userCreatedTree).toMatchSnapshot();
	});
});