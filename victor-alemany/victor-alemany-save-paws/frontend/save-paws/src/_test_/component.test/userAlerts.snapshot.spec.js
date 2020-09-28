import React from 'react';
import renderer from 'react-test-renderer';
import UserAlerts from '../../components/userAlerts';
import { BrowserRouter } from 'react-router-dom';

describe('Alert List snapshot', () => {
	const userAlertsTree = renderer.create(
		<BrowserRouter>
			<UserAlerts />
		</BrowserRouter>
	);

	it('should match', () => {
        expect(userAlertsTree).toMatchSnapshot();
	});
});