import React from 'react';
import RecipePage from './RecipePage';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

function renderRecipePage(arg) {
	const defaultProps = {
		match: {
			params: {}
		}
	};
	const props = { ...defaultProps, ...arg };
	return renderer.create(
		<BrowserRouter>
			<RecipePage {...props} />
		</BrowserRouter>
	);
}

describe('RecipePage', () => {
	const title = 'Grilled Tofu Salad With Miso Dressing';
	let recipePageTree;

	beforeEach(async () => {
		recipePageTree = renderRecipePage();
		recipePageTree.update();
	});

	fit('should create recipe page without a recipe', async () => {
		const props = {
			match: {
				params: {
					recipeId: title
				}
			}
		};
		recipePageTree = renderRecipePage(props);
		expect(recipePageTree).toMatchSnapshot();
	});
});
