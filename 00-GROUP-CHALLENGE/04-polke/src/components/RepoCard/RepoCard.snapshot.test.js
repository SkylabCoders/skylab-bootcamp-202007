import renderer from 'react-test-renderer';
import RepoCard from './RepoCard';
import React from 'react';

describe('RepoCard snapshot', () => {
	const tree = renderer.create(<RepoCard />);
	it('should match', () => {
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
