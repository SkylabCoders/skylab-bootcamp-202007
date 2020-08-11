import React from 'react';
import renderer from 'react-test-renderer';
import Details from './Details';
import { BrowserRouter } from 'react-router-dom';

describe('Detail snapshot', () => {
	it('Should match', () => {
		const props = {
			match: {
				params: {
					heroId: '12',
					name: 'shuvi'
				}
			}
		};
		const tree = renderer.create(
			<BrowserRouter>
				<Details {...props} />
			</BrowserRouter>
		);
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
