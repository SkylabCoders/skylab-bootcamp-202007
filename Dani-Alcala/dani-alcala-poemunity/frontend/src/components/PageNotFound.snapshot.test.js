import React from 'react';
import renderer from 'react-test-renderer';
import PageNotFound from './PageNotFound';
import { BrowserRouter } from 'react-router-dom';

function renderPageNotFound(arg) {
	const defaultProps = {
		match: {
			params: {}
		}
	};

	const props = { ...defaultProps, ...arg };
	return renderer.create(
		<BrowserRouter>
			<PageNotFound {...props} />
		</BrowserRouter>
	);
}

describe('PageNotFound', () => {
	let PageNotFoundTree;

	beforeEach(async () => {
		PageNotFoundTree = renderPageNotFound();
	});

	it('should match without id', async () => {
		expect(PageNotFoundTree).toMatchSnapshot();
    });
})