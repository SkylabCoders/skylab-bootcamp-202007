describe('Skylab service', function () {
	//Config//

	//Test//
	it('Get list', function () {
		expect(SkylabService.getList()).toEqual(skylaberList);
	});
	it('Get skylaber by Id', function () {
		const id = 9;
		expect(SkylabService.getSkylaberById(id)).toEqual(skylaberList[0]);
	});
	it('Get skylaber by Name', function () {
		const name = 'Alex';
		expect(...SkylabService.getSkylaberByName(name)).toEqual(skylaberList[0]);
	});
	it('Search', function () {
		const text = 'Alex';
		expect(...SkylabService.search(text)).toEqual(skylaberList[0]);
	});
});
