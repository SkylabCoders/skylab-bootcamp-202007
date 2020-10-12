import React from 'react';
import renderer from 'react-test-renderer';
import UserFollow from '../../components/userFollow';
import { BrowserRouter } from 'react-router-dom';

describe('Alert List snapshot', () => {
	const userCreatedTree = renderer.create(
		<BrowserRouter>
			<UserFollow />
		</BrowserRouter>
	);

	it('should match', () => {
        expect(userFollowTree).toMatchSnapshot();
	});
});