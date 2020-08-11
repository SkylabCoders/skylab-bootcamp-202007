import React from 'react';
import TopFiveComponent from './TopFive.component';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

function renderTopFive(arg) {
	return renderer.create(
		<BrowserRouter>
			<TopFiveComponent title={arg} />
		</BrowserRouter>
	);
}

describe('TopFive', () => {
	const title = 'Grilled Tofu Salad With Miso Dressing';

	let listItemRecipeTree;

	beforeEach(async () => {
		listItemRecipeTree = renderTopFive(title);
	});

	it('should match with title', async () => {
		expect(listItemRecipeTree).toMatchSnapshot();
	});

	it('should match with new title', async () => {
		const newTItle = 'Abocado';
		listItemRecipeTree = renderTopFive(newTItle);

		expect(listItemRecipeTree).toMatchSnapshot();
	});
});
