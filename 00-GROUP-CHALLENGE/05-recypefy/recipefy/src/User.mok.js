let userMoked = {
	name: 'Lolo',
	id: 1,
	password: null,
	photo:
		'https://www.infojobs.net/ficha.foto?quina=6ccf4cf4-57d3-42a6-9571-58bf9eb9e25a',
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
			title: 'Persian Chicken'
		},
		{ title: 'Dijon Chicken' },
		{
			title: 'Roast Chicken'
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
