User definition

User{
    name,
    id,
    password,
    image,
    preference: new Preference,
    favouriteRecipe: [];
    --myRecipe: [];
}

Preference{
    balanced: false,
    highProtein: false,
    lowFat: false,
    lowCarb: false,
    vegan: false,
    vegetarian: false,
    sugarConcius: false,
    peanutFree: false,
    treeNutFree: false,
    alcoholFree: false,
}

Recipe {
    photo
    title
    id
    description
    prefences: new Preferences  
}


As a food lover
I want a database of recipes
So that I can manage my favourite recipes (and I can create new ones)




STAGE ONE - CREATE USER

Given a <user.name> and <user.password>
When I log in
Then I can acces to the app


STAGE TWO- SEARCH RECIPES

Given a <preference>
When I search in the database
Then the recipes list matches will be displayed

STAGE THREE - VIEW RECOMMEDATIONS 

Given a <user.preference>
When I go to the main page
Then I can see "X" matched recommendations


STAGE FOUR - FAVOURITE RECIPES

Given a <recipe>
When I see a recipe I like
Then I can save it

Given a <user.favouriteRecipe>
When I go to my profile
Then I can see them

Given a <user.favouriteRecipe>
When I go to my profile
Then I can remove it



STAGE FIVE - VOTE RECIPE

Given a <recipe>
When I see a recipe I like
Then I can thumb up or thumb down


((STAGE SIX - RECIPE RANKING

Given a <recipe><list>
When I go to the home page
Then I can the top five ranking))