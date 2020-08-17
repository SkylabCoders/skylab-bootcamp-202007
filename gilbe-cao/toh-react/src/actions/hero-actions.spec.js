import { loadHeroes } from './hero-actions';

describe('Hero actions', () => {
	it('should load heroes', async () => {
		const heroes = await loadHeroes();
		expect(heroes).not.toBeDefined();
	});
});
