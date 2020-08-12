import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import TextInput from '../components/TextInput';

describe('TextInputs snapshot', () => {
	const tree = renderer.create(
		<Router>
			<TextInput />
		</Router>
	);
	it('Should match', () => {
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
