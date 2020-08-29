describe('List', function () {
    let listComponent;
    let heroList = [
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