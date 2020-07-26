describe('Skylab service', function () {
	//Config//
	let service = null;
	beforeEach(function () {
		service = new SkylabService();
	});
	//Test//
	it('Get list', function () {
		expect(service.getList()).toEqual(skylaberList);
	});
	it('Get skylaber by Id', function () {
		const id = 9;
		expect(service.getSkylaberById(id)).toEqual(skylaberList[0]);
	});
	it('Get skylaber by Name', function () {
		const name = 'Alex';
		expect(...service.getSkylaberByName(name)).toEqual(skylaberList[0]);
	});
	it('Search', function () {
		const text = 'Alex';
		expect(...service.search(text)).toEqual(skylaberList[0]);
	});
});
