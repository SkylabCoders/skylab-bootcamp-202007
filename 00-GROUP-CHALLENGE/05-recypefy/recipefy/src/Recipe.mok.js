const potato = {
	photo:
		'https://www.paulinacocina.net/wp-content/uploads/2020/01/untitled-copy.jpg',
	title: 'potato',
	id: 1,
	description: 'bla bla bla',
	prefences: new Preference(
		false,
		true,
		true,
		false,
		false,
		false,
		false,
		true,
		false,
		true
	)
};

const spagueti = {
	photo:
		'https://www.paulinacocina.net/wp-content/uploads/2020/01/untitled-copy.jpg',
	title: 'spagueti',
	id: 2,
	description: 'bla bla bla',
	prefences: new Preference(
		false,
		true,
		true,
		false,
		false,
		false,
		false,
		false,
		false,
		false
	)
};

const letuce = {
	photo:
		'https://www.paulinacocina.net/wp-content/uploads/2020/01/untitled-copy.jpg',
	title: 'letuce',
	id: 3,
	description: 'bla bla bla',
	prefences: new Preference(
		false,
		true,
		true,
		false,
		false,
		true,
		false,
		true,
		false,
		false
	)
};

const apple = {
	photo:
		'https://www.paulinacocina.net/wp-content/uploads/2020/01/untitled-copy.jpg',
	title: 'apple',
	id: 4,
	description: 'bla bla bla',
	prefences: new Preference(
		false,
		true,
		true,
		false,
		false,
		false,
		false,
		true,
		false,
		false
	)
};

const meat = {
	photo:
		'https://www.paulinacocina.net/wp-content/uploads/2020/01/untitled-copy.jpg',
	title: 'meat',
	id: 5,
	description: 'bla bla bla',
	prefences: new Preference(
		false,
		true,
		true,
		false,
		false,
		false,
		false,
		true,
		false,
		false
	)
};

function Preference(
	balanced,
	highProtein,
	lowFat,
	lowCarb,
	vegan,
	vegetarian,
	sugarConcius,
	peanutFree,
	treeNutFree,
	alcoholFree
) {
	balanced = balanced;
	highProtein = highProtein;
	lowFat = lowFat;
	lowCarb = lowCarb;
	vegan = vegan;
	vegetarian = vegetarian;
	sugarConcius = sugarConcius;
	peanutFree = peanutFree;
	treeNutFree = treeNutFree;
	alcoholFree = alcoholFree;
}

let receteList = [potato, spagueti, letuce, apple, meat];

export default receteList;
<<<<<<< HEAD

=======
>>>>>>> 8899e8b7aa0d3c4aa26553850eff9a879d8c2dce
