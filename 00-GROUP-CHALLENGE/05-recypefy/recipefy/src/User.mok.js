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
			id:
				'http://www.edamam.com/ontologies/edamam.owl#recipe_b79327d05b8e5b838ad6cfd9576b30b6'
		},
		{
			id:
				'http://www.edamam.com/ontologies/edamam.owl#recipe_8275bb28647abcedef0baaf2dcf34f8b'
		},
		{
			id:
				'http://www.edamam.com/ontologies/edamam.owl#recipe_2463f2482609d7a471dbbf3b268bd956'
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
