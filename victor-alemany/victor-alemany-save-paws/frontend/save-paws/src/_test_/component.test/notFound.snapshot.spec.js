import React from 'react';
import renderer from 'react-test-renderer';
import PageNotFound from '../../components/pageNotFound';
import { BrowserRouter } from 'react-router-dom';

describe('Alert List snapshot', () => {
	const pageNotFoundTree = renderer.create(
		<BrowserRouter>
			<PageNotFound />
		</BrowserRouter>
	);

	it('should match', () => {
        expect(pageNotFoundTree).toMatchSnapshot();
	});
});