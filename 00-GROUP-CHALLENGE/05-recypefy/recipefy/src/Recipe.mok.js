const potato = {
	photo:
		'https://www.paulinacocina.net/wp-content/uploads/2020/01/untitled-copy.jpg',
	title: 'potato',
	id: 1,
	description: 'bla bla bla',
	puntuation: 5,
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
	puntuation: 3,
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
	puntuation: 4,
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
	puntuation: 0,
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
	puntuation: 2,
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

let receteListMoked = [potato, spagueti, letuce, apple, meat];

<<<<<<< HEAD
export default receteList;
<<<<<<< HEAD

=======
>>>>>>> 8899e8b7aa0d3c4aa26553850eff9a879d8c2dce
=======
export default receteListMoked;
>>>>>>> b16a3af334c6daac766a15f5cf0ad8509654eece
