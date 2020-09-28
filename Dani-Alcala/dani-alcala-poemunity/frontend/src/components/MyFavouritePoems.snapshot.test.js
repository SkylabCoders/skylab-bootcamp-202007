import React from 'react';
import renderer from 'react-test-renderer';
import MyFavouritePoems from './MyFavouritePoems';
import { BrowserRouter } from 'react-router-dom';

function renderMyFavouritePoems(arg) {
	const defaultProps = {
		match: {
			params: {}
		}
	};

	const props = { ...defaultProps, ...arg };
	return renderer.create(
		<BrowserRouter>
			<MyFavouritePoems {...props} />
		</BrowserRouter>
	);
}

describe('MyFavouritePoems', () => {
	let MyFavouritePoemsTree;

	beforeEach(async () => {
		MyFavouritePoemsTree = renderMyFavouritePoems();
	});

	it('should match without id', async () => {
		expect(MyFavouritePoemsTree).toMatchSnapshot();
    });
})