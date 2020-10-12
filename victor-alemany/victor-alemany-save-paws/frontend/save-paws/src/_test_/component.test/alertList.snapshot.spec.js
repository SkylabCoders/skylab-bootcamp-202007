import React from 'react';
import renderer from 'react-test-renderer';
import AlertList from '../../components/alertList';
import { BrowserRouter } from 'react-router-dom';

describe('Alert List snapshot', () => {
	const alertListTree = renderer.create(
		<BrowserRouter>
			<AlertList />
		</BrowserRouter>
	);

	it('should match', () => {
		expect(alertListTree).toMatchSnapshot();
	});
});
