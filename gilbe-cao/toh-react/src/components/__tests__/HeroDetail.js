import React from 'react';
import renderer from 'react-test-renderer';
import HeroDetail from '../HeroDetail';
import { BrowserRouter } from 'react-router-dom';

function renderHeroDetail(arg) {
	const defaultProps = {
		match: {
			params: {}
		}
	};

	const props = { ...defaultProps, ...arg };
	return renderer.create(
		<BrowserRouter>
			<HeroDetail {...props} />
		</BrowserRouter>
	);
}

describe('HeroDetail', () => {
	let heroDetailTree;
	let instance;
	let component;
	let text;

	beforeEach(() => {
		heroDetailTree = renderHeroDetail();

		instance = heroDetailTree.root;
		component = instance.findByType('h2');
		text = component.children[0];
		heroDetailTree.update();
	});

	it('should not regress without hero ID', () => {
		expect(heroDetailTree).toMatchSnapshot();
	});

	it('should display a title without id', () => {
		expect(text).toEqual('Register a new hero:');
	});

	it('should not regress with hero ID', () => {
		const props = {
			match: {
				params: {
					heroId: 14
				}
			}
		};
		heroDetailTree = renderHeroDetail(props);

		expect(heroDetailTree).toMatchSnapshot();
	});

	it('should match with a missing hero ID', () => {
		const props = {
			match: {
				params: {
					heroId: 26
				}
			}
		};

		heroDetailTree = renderHeroDetail(props);
		heroDetailTree.update();

		expect(heroDetailTree).toMatchSnapshot();
	});
});
