import React from 'react';
import renderer from 'react-test-renderer';
import Categories from '../../components/categories';
import { BrowserRouter } from 'react-router-dom';

describe('Alert List snapshot', () => {
	const categoriesTree = renderer.create(
		<BrowserRouter>
			<Categories />
		</BrowserRouter>
	);

	it('should match', () => {
        expect(categoriesTree).toMatchSnapshot();
	});
});