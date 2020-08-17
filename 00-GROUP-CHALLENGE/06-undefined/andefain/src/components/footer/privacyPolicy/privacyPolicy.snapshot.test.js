import renderer from 'react-test-renderer';
import React from 'react';
import PrivacyPolicy from './privacyPolicy';

describe('Privacy policy snapshot', () => {
	const tree = renderer.create(<PrivacyPolicy />);
	it('Should match', () => {
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
