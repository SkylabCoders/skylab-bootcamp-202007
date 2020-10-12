import React from 'react';
import renderer from 'react-test-renderer';
import Map from '../../components/map';
import { BrowserRouter } from 'react-router-dom';

describe('Alert List snapshot', () => {
	const mapTree = renderer.create(
		<BrowserRouter>
			<Map />
		</BrowserRouter>
	);

	it('should match', () => {
        expect(mapTree).toMatchSnapshot();
	});
});