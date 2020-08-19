import React from 'react';
import PreferenceList from './PreferenceList';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

function renderPreferencesList() {
	return renderer.create(
		<BrowserRouter>
			<PreferenceList />
		</BrowserRouter>
	);
}

describe('PreferencesList', () => {
	let preferencesList;

	beforeEach(async () => {
		preferencesList = renderPreferencesList();
	});

	it('should match with title', async () => {
		expect(preferencesList).toMatchSnapshot();
	});
});
