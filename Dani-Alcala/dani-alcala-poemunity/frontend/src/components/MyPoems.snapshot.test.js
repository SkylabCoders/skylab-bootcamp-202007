import React from 'react';
import renderer from 'react-test-renderer';
import MyPoems from './MyPoems';
import { BrowserRouter } from 'react-router-dom';

function renderMyPoems(arg) {
	const defaultProps = {
		match: {
			params: {}
		}
	};

	const props = { ...defaultProps, ...arg };
	return renderer.create(
		<BrowserRouter>
			<MyPoems {...props} />
		</BrowserRouter>
	);
}

describe('MyPoems', () => {
	let MyPoemsTree;

	beforeEach(async () => {
		MyPoemsTree = renderMyPoems();
	});

	it('should match without id', async () => {
		expect(MyPoemsTree).toMatchSnapshot();
    });
})