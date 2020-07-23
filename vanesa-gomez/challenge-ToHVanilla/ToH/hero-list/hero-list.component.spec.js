describe('List', () => {
	let listComponent;

	beforeEach(() => {
		listComponent = new ListComponent();
	});

	it('should create listComponent', () => {
		expect(listComponent).toBeTruthy();
	});

	it('should call onInit execute properly', () => {
		const spy = spyOn(listComponent, 'onInit');
		listComponent.onInit();
		expect(spy).toHaveBeenCalled();
	});
});
