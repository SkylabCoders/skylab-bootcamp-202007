import React from 'react';
import renderer from 'react-test-renderer';
import List from './List';
import { BrowserRouter } from 'react-router-dom';

function renderList(arg) {
	const defaultProps = {
		match: {
			params: {}
		}
	};

	const props = { ...defaultProps, ...arg };
	return renderer.create(
		<BrowserRouter>
			<List {...props} />
		</BrowserRouter>
	);
}

describe('List', () => {
	let ListTree;

	beforeEach(async () => {
		ListTree = renderList();
	});

	it('should match without id', async () => {
		expect(ListTree).toMatchSnapshot();
    });
})