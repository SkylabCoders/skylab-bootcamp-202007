describe('skylaber-detail',function(){
    let skylaberDetailComponent;
    beforeAll(function(){
        skylaberDetailComponent = new SkylaberDetailComponent();
    });

    it('should create new hero detail component',function(){
        expect(skylaberDetailComponent).toBeTruthy();
    })

    it('should call onInit and behave property',function(){
        const spy = spyOn(skylaberDetailComponent,'onInit');
        dashboardComponent.onInit();

        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith();
    })

})
