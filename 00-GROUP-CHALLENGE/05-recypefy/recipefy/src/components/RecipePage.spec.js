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

	let recipePageTree;
	let instance;
	let component;
	let text;

	beforeEach(async () => {
		recipePageTree = renderRecipePage();
		instance = recipePageTree.root;
		component = instance.findByType('h2');
		text = component.children[0];
		recipePageTree.update();
	});

	xit('should match with title', async () => {
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
