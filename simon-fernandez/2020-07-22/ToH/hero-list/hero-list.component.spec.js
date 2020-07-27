describe('Hero list', function () {
	let heroList, getHeroList;
	beforeEach(function () {
		heroList = [
			{ id: 11, name: 'Dr Nice' },
			{ id: 12, name: 'Narco' },
			{ id: 13, name: 'Bombasto' },
			{ id: 14, name: 'Celeritas' },
			{ id: 15, name: 'Magneta' },
			{ id: 16, name: 'RubberMan' },
			{ id: 17, name: 'Dynama' },
			{ id: 18, name: 'Dr IQ' },
			{ id: 19, name: 'Magma' },
			{ id: 20, name: 'Tornado' }
		];
		getHeroList = getHeroList();
	});

	it('should get the hero list', function () {
		expect(getHeroList).toBeEqual(heroList);
	});
});
