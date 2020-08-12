import renderer from 'react-test-renderer';
import PopUpBox from './PopUpBox';
import React from 'react';
import BrowserRouter from 'react-router-dom';

describe.skip('PopUpBox snapshot', () => {
	const tree = renderer.create(
		<BrowserRouter>
			<PopUpBox />
		</BrowserRouter>
	);
	it('should match', () => {
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
