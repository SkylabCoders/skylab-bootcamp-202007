describe('hero-list',function(){
    let listComponent;

    beforeAll(function(){
        listComponent = new HeroListComponent();
    });

    it('should create',function(){
       expect(listComponent).toBeTruthy();
    })

    it('should call onInit and behave property',function(){
        const spy = spyOn(listComponent,'onInit');
        listComponent.onInit();

        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith();
    })
})
