import React from 'react';
import renderer from 'react-test-renderer';
import AlertForm from '../../components/alertForm';
import { BrowserRouter } from 'react-router-dom';

describe('Alert Form snapshot', () => {
	const alertFormTree = renderer.create(
		<BrowserRouter>
			<AlertForm />
		</BrowserRouter>
	);

	it('should match', () => {
		expect(alertFormTree).toMatchSnapshot();
	});
});
