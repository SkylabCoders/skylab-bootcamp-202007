describe('Life', function () {
	// let initial;
	// let final;

	let life;

	beforeEach(function () {
		life = new Life();

	});

	it('should create', function() {
		expect(life).toBeTruthy();
	})
	
	//recomienda un expect por linea pero se pueden hacer varios, pero eso si, el último debe responder a la pregunta del it
	it('should reamin stable when initial state is null or undefined', function () {
		expect(life.next(undefined)).not.toBeDefined();
		expect(life.next(null)).not.toBeDefined();
		expect(life.next()).not.toBeDefined();
	});

	it('should work with Blinker states', function() {
		expect(life.next(blinker.initialState)).toEqual(blinker.secondState)
	})
		
	// 	count = 0;
		
	// 	initial = 
    //     [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];	

	// 	final =
	// 	[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
	// })

	it('should return Blinker ok', function () {
		expect(final).toEqual(finalGrid);
	})
})