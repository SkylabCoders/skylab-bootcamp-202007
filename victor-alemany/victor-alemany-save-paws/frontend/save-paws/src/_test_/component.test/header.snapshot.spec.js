import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../../components/header';
import { BrowserRouter } from 'react-router-dom';

describe('Alert List snapshot', () => {
	const headerTree = renderer.create(
		<BrowserRouter>
			<Header />
		</BrowserRouter>
	);

	it('should match', () => {
        expect(headerTree).toMatchSnapshot();
	});
});