import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../../components/footer';
import { BrowserRouter } from 'react-router-dom';

describe('Alert List snapshot', () => {
	const footerTree = renderer.create(
		<BrowserRouter>
			<Footer />
		</BrowserRouter>
	);

	it('should match', () => {
        expect(footerTree).toMatchSnapshot();
	});
});