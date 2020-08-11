import renderer from 'react-test-renderer';
import Landing from './Landing';
import React from 'react';
import BrowserRouter from 'react-router-dom';

describe('Landing snapshot', () => {
	const tree = renderer.create(
		<BrowserRouter>
			<Landing />
		</BrowserRouter>
	);
	it('should match', () => {
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
