import React from 'react';
import PreferencesList from './PreferencesList';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

function renderPreferencesList() {
	return renderer.create(
		<BrowserRouter>
			<PreferencesList />
		</BrowserRouter>
	);
}

describe('PreferencesList', () => {
	const ingredient = '14 ounces extra firm tofu';
	const photo =
		'https://www.edamam.com/web-img/272/2724347f1843a7c437faacf837326676.jpg';
	const preference = 'Sugar-Conscious';
	const source = 'Steamy Kitchen';
	const time = 0;
	const title = 'Grilled Tofu Salad With Miso Dressing';
	const url =
		'http://steamykitchen.com/20074-grilled-tofu-with-miso-dressing-recip.html';
	const yeld = 4;

	let recipe;
	let recipeLIst;
	let preferencesList;
	let myCallbackMockFunction;

	beforeEach(async () => {
		recipe = {
			calories: 880.8013194374998,
			ingredients: [ingredient],
			photo: photo,
			preferences: [preference],
			source: source,
			time: time,
			title: title,
			url: url,
			yeld: yeld
		};
		recipeLIst = [recipe];
		preferencesList = renderPreferencesList();
	});

	it('should match with title', async () => {
		expect(preferencesList).toMatchSnapshot();
	});
});
