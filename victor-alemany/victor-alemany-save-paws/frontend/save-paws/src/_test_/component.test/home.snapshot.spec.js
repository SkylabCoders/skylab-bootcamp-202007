import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../../components/home';
import { BrowserRouter } from 'react-router-dom';

describe('Alert List snapshot', () => {
	const homeTree = renderer.create(
		<BrowserRouter>
			<Home />
		</BrowserRouter>
	);

	it('should match', () => {
        expect(homeTree).toMatchSnapshot();
	});
});