import dispatcher from '../Dispatcher';
import actionTypes from './actionTypes';

var req = new XMLHttpRequest();
const URL_API_SEARCH = 'https://api.edamam.com/search?';
const APP_API_ID = '46083075';
const APP_API_KEY = '83cd4df2c64a04f570c8647f833a8a7e';
const APP_IDENTIFICATION = `&app_id=${APP_API_ID}&app_key=${APP_API_KEY}`;

export async function loadRecipe(
	newSearch,
	dietPreferences,
	healthPreferences
) {
	if (!newSearch && !dietPreferences && !healthPreferences) {
		newSearch = 'salad';
		dietPreferences = '';
		healthPreferences = '';
	}
	if (!dietPreferences) {
		dietPreferences = '';
	}

	if (!healthPreferences) {
		healthPreferences = '';
	}

	const actualSearchLabel = 'q=' + newSearch;
	function Recipe(
		photo,
		title,
		time,
		url,
		source,
		calories,
		yeld,
		ingredients,
		preferences
	) {
		this.photo = photo;
		this.title = title;
		this.time = time;
		this.url = url;
		this.source = source;
		this.calories = calories;
		this.yeld = yeld;
		this.ingredients = ingredients;
		this.preferences = preferences;
	}

	function objectConversor(apiMatch) {
		const actualRecipe = apiMatch.recipe;
		const actualPreferencces = actualRecipe.healthLabels.concat(
			actualRecipe.dietLabels
		);

		const newRecipe = new Recipe(
			actualRecipe.image,
			actualRecipe.label,
			actualRecipe.totalTime,
			actualRecipe.url,
			actualRecipe.source,
			actualRecipe.calories,
			actualRecipe.yeld,
			actualRecipe.ingredientLines,
			actualPreferencces
		);
		return newRecipe;
	}
	const recipeObjectApi = await new Promise((resolve, reject) => {
		req.open(
			'GET',
			URL_API_SEARCH +
				actualSearchLabel +
				APP_IDENTIFICATION +
				dietPreferences +
				healthPreferences,
			true
		);
		req.onreadystatechange = function () {
			if (req.readyState === 4) {
				if (req.status === 200) {
					resolve(JSON.parse(req.responseText));
				} else {
					reject('Error Loading page');
				}
			}
		};
		req.send(null);
	});

	const objectConverted = await recipeObjectApi.hits.map(objectConversor);

	const actualAction = await myDispatch(
		actionTypes.LOAD_RECIPE,
		objectConverted
	);

	return actualAction;
}

function myDispatch(actualActionType, actualData) {
	return dispatcher.dispatch({
		type: actualActionType,
		data: actualData
	});
}
