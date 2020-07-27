describe('Skaylaber Detail', function () {
	let detailComponent;

	beforeEach(function () {
		detailComponent = new detailComponent();
	});

	it('should create', function () {
		expect(detailComponent).toBeTruthy();
	});

	it('should call onInit and behave properly', function () {
		const spy = spyOn(detailComponent, 'onInit');
		detailComponent.onInit();

		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledTimes(1);
		expect(spy).toHaveBeenCalledWith();
	});
});
