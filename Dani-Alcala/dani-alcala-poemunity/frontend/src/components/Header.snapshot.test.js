import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';

function renderHeader(arg) {
	const defaultProps = {
		match: {
			params: {}
		}
	};

	const props = { ...defaultProps, ...arg };
	return renderer.create(
		<BrowserRouter>
			<Header {...props} />
		</BrowserRouter>
	);
}

describe('Header', () => {
	let HeaderTree;

	beforeEach(async () => {
		HeaderTree = renderHeader();
	});

	it('should match without id', async () => {
		expect(HeaderTree).toMatchSnapshot();
    });
})