describe('Hero Dashboard Component', function() {
  const name = 'Dr. Nice';
  let dashboard = new HeroDashboardComponent;

    it('should give a name', function(){
        expect(hero[0].name).toEqual(name);
    }) 
})