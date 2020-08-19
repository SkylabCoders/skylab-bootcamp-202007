import renderer from 'react-test-renderer';
import React from 'react';
import Header from '../Header';
import { BrowserRouter } from 'react-router-dom';

describe('App snapshot', () => {
	const props = {
		match: {
			params: {
				heroId: 14
			}
		}
	};
	const tree = renderer.create(
		<BrowserRouter>
			<Header {...props} />
			);
		</BrowserRouter>
	);
	it('should match', () => {
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
