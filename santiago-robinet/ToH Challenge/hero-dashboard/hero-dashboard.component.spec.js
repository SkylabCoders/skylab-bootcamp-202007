describe('Hero Dashboard', function(){
    
    const heroDashboard = new HeroDashboard();
    const dashboard = ['Dr Nice', 'Narco', 'Bombasto', 'Celeritas'];

    xit('should show a created dashboard to display', function(){
       expect(heroDashboard.showDashboard()).toEqual(dashboard);
    })

})