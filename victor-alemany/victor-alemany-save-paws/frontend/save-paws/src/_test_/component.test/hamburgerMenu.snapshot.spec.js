import React from 'react';
import renderer from 'react-test-renderer';
import HamburgerMenu from '../../components/hamburgerMenu';
import { BrowserRouter } from 'react-router-dom';

describe('Alert List snapshot', () => {
	const hamburgerMenuTree = renderer.create(
		<BrowserRouter>
			<HamburgerMenu />
		</BrowserRouter>
	);

	it('should match', () => {
        expect(hamburgerMenuTree).toMatchSnapshot();
	});
});