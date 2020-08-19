import renderer from 'react-test-renderer';
import App from './App';
import React from 'react';

describe('App Snapshot', () => {
	const tree = renderer.create(<App />);

	it('should match snapshot', () => {
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
