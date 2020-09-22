import renderer from 'react-test-renderer';
import RepoDetail from './RepoDetail';
import React from 'react';

describe('RepoDetail snapshot', () => {
	const tree = renderer.create(<RepoDetail />);
	it('should match', () => {
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
