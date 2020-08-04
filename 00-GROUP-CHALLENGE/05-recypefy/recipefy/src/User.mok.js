let userMoked = {
	name: 'Lolo',
	id: 1,
	password: null,
	photo: 'https://image.flaticon.com/icons/svg/929/929564.svg',
	preference: new Preference(
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
	),
	favouriteRecipe: [
		{
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
		}
	]
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
const userListMoked = [userMoked];
export default userListMoked;
