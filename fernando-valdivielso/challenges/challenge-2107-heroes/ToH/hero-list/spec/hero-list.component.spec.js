describe('List', function () {
    let listComponent;

    beforeEach(function () {
        listComponent = new ListComponent();

    });

    it('should create a listComponent', function () {
        expect(listComponent).toBeTruthy();
    });

    it('should call onInit and execute properly', function () {
        const spyOnInit = spyOn(listComponent, 'onInit');
        listComponent.onInit();

        expect(spyOnInit).toHaveBeenCalled();
    });
    
});