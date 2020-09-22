import renderer from 'react-test-renderer';
import RepoCreation from './RepoCreation';
import React from 'react';

describe('RepoCreation snapshot', () => {
	const tree = renderer.create(<RepoCreation />);
	it('should match', () => {
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
