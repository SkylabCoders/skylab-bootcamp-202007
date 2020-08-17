import React from 'react';
import ListItemRecipe from './ListItemRecipe';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

function renderListItemRecipe(arg) {
	return renderer.create(
		<BrowserRouter>
			<ListItemRecipe title={arg} />
		</BrowserRouter>
	);
}

describe('ListItemRecipe', () => {
	const title = 'Grilled Tofu Salad With Miso Dressing';

	let listItemRecipeTree;

	beforeEach(async () => {
		listItemRecipeTree = renderListItemRecipe(title);
	});

	it('should match with title', async () => {
		expect(listItemRecipeTree).toMatchSnapshot();
	});

	it('should match with new title', async () => {
		const newTItle = 'Abocado';
		listItemRecipeTree = renderListItemRecipe(newTItle);

		expect(listItemRecipeTree).toMatchSnapshot();
	});
});
