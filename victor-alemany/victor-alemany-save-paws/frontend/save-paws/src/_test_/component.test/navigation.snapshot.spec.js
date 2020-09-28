import React from 'react';
import renderer from 'react-test-renderer';
import Navigation from '../../components/navigation';
import { BrowserRouter } from 'react-router-dom';

describe('Alert List snapshot', () => {
	const navigationTree = renderer.create(
		<BrowserRouter>
			<Navigation />
		</BrowserRouter>
	);

	it('should match', () => {
        expect(navigationTree).toMatchSnapshot();
	});
});