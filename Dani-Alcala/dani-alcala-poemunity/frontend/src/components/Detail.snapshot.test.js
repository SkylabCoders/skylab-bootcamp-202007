import React from 'react';
import renderer from 'react-test-renderer';
import Detail from './Detail';
import { BrowserRouter } from 'react-router-dom';

function renderDetail(arg) {
	const defaultProps = {
		match: {
			params: {}
		}
	};

	const props = { ...defaultProps, ...arg };
	return renderer.create(
		<BrowserRouter>
			<Detail {...props} />
		</BrowserRouter>
	);
}

describe('Detail', () => {
	let DetailTree;

	beforeEach(async () => {
		DetailTree = renderDetail();
	});

	it('should match without id', async () => {
		expect(DetailTree).toMatchSnapshot();
	});
})