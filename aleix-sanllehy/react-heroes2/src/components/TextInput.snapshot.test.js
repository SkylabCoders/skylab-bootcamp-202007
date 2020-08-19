import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import TextInput from './TextInput';

describe('Header snapshot', () => {
	const tree = renderer.create(
		<Router>
			<TextInput />
		</Router>
	);

	it('should match', () => {
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
