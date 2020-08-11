import React from 'react';
import renderer from 'react-test-renderer';
import HeroDetail from '../HeroDetail';
import { BrowserRouter } from 'react-router-dom';
import heroList from '../../hero.mock';
import heroStore from '../../stores/heroStore';

describe('HeroDetail', () => {
	let heroDetailTree;
	let instance;
	let component;
	let text;
	let props = {
		match: {
			params: {
				heroId: null
			}
		}
	};

	beforeEach(async () => {
		heroDetailTree = renderer.create(
			<BrowserRouter>
				<HeroDetail {...props} />
			</BrowserRouter>
		);
		instance = heroDetailTree.root;
		component = instance.findByType('h2');
		text = component.children[0];
		heroDetailTree.update();
	});

	it('should match with hero ID', async () => {
		expect(heroDetailTree).toMatchSnapshot();
	});

	it('should display a title without id', async () => {
		expect(text).toEqual('Register a new hero:');
	});
});
