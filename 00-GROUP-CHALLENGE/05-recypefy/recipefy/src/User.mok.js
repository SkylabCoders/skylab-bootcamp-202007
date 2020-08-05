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
