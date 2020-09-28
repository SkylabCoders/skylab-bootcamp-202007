import React from 'react';
import renderer from 'react-test-renderer';
import Ranking from './Ranking';
import { BrowserRouter } from 'react-router-dom';

function renderRanking(arg) {
	const defaultProps = {
		match: {
			params: {}
		}
	};

	const props = { ...defaultProps, ...arg };
	return renderer.create(
		<BrowserRouter>
			<Ranking {...props} />
		</BrowserRouter>
	);
}

describe('Ranking', () => {
	let RankingTree;

	beforeEach(async () => {
		RankingTree = renderRanking();
	});

	it('should match without id', async () => {
		expect(RankingTree).toMatchSnapshot();
    });
})