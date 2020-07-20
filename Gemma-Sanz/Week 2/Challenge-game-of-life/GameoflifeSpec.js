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
		expect(life.next(undefined)).toBeTruty();
		//next sera una propiedad dentro de mi objeto life
		expect(life.next(null)).toBeTruty();
		expect(life.next()).toBeTruty();
		//no es recomendable poner más de un expect dentro el it, pero és el último tiene que responder la pregunta
	});
//Scenario #2
	it('should work with Blinker states', function () {
		expect(life.next(blinker.initialState)).toEqual(blinker.secondState);
	});

	let initialStage = [
		[0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0],
		[0,0,1,1,1,0,0],
		[0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0]
	];
	let finalStage = [

		[0,0,0,0,0,0,0],
        [0,0,0,1,0,0,0],
        [0,0,0,1,0,0,0],
        [0,0,0,1,0,0,0],
        [0,0,0,0,0,0,0]
	];

	it('should work with Toad states', function () {
		expect(life.next(toad.initialState)).toEqual(toad.secondState);
	});

    let initialState = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 0],
        [0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]
    ];
    
    let currentState = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0],
        [0, 1, 0, 0, 1, 0],
        [0, 1, 0, 0, 1, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]
	];
	it('should work with Beacon states', function () {
		expect(life.next(beacon.initialState)).toEqual(beacon.secondState);
	});

    let initialState = [
        [0, 0, 0, 0, 0, 0],
		[0, 1, 1, 0, 0, 0],
		[0, 1, 0, 0, 0, 0],
		[0, 0, 0, 0, 1, 0],
		[0, 0, 0, 1, 1, 0],
		[0, 0, 0, 0, 0, 0]
    ];
    
    let currentState = [
        [0, 0, 0, 0, 0, 0],
		[0, 1, 1, 0, 0, 0],
		[0, 1, 1, 0, 0, 0],
		[0, 0, 0, 1, 1, 0],
		[0, 0, 0, 1, 1, 0],
		[0, 0, 0, 0, 0, 0]
	];
	
	let neightbours = 3

	it('should have a finalStage', function () {
		expect(newStage).toEqual(finalStage)
	})

	it('should have a number of neightbours', function () {
		expect(runStage(initialStage, 1, 3)).toBe(neightbours)
	})
})
