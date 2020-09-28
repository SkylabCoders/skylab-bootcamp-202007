import React from 'react';
import renderer from 'react-test-renderer';
import AlertsFiltered from '../../components/alertsFiltered';
import { BrowserRouter } from 'react-router-dom';

describe('Alert List snapshot', () => {
	const alertsFilteredTree = renderer.create(
		<BrowserRouter>
			<AlertsFiltered />
		</BrowserRouter>
	);

	it('should match', () => {
        expect(alertsFilteredTree).toMatchSnapshot();
	});
});