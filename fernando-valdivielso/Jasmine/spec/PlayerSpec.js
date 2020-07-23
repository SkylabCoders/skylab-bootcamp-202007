describe('Player', function () {
   const personConfig = {
     name: 'Fer',
     lastName: 'Nandez',
     trophies: { gold: 2, silver: 3, bronze: 0 }
   }
   const player = new Player(personConfig.name, personConfig.trophies);
   

  it('should have a name', function () {
    
    expect(player.name).toBe(personConfig.name);
   
    
  });

  it('should count the number of trophies', function () {

    expect(player.countTrophies()).toBe(5);
  })
});

