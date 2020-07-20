describe('life', function () {
	let life;
	beforeEach(function (){
		life = new Life();
	});

	it('should create', function () {
		expect(life).toBeTruty();
	});
//Vamos recreanto los escenarios del README.md, este es el Scenario#1
	it('should remain stable when no initialState', function () {
		expect(life.next(undefined)).not.toBeDefined();
		//next sera una propiedad dentro de mi objeto life
		expect(life.next(null)).not.toBeDefined();
		expect(life.next()).not.toBeDefined();
		//no es recomendable poner más de un expect dentro el it, pero és el último tiene que responder la pregunta
	});
//Scenario #2
	it('should work with Blinker states', function () {
		expect(life.next(blinker.initialState)).toEqual(blinker.secondState);
	});

	it('should work with Toad states', function () {
		expect(life.next(toad.initialState)).toEqual(toad.secondState);
	});


	it('should work with Beacon states', function () {
		expect(life.next(beacon.initialState)).toEqual(beacon.secondState);
	});


	/*
	let neightbours = 3

	it('should have a finalStage', function () {
		expect(newStage).toEqual(finalStage)
	})

	it('should have a number of neightbours', function () {
		expect(runStage(initialStage, 1, 3)).toBe(neightbours)
	})
*/	
})

