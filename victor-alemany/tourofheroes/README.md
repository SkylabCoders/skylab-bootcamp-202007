HERO DEFINITION
Hero {
id: number;
name: string;
}

1. HERO DETAILS
Given a Hero
When I navigate to the details view
Then hero Id and heroName are displayed;  

Given a Hero details view
When I input a newName
Then the heroName property is updated



2. HERO LIST
Given a heroList
When I navigate to the list view
Then I can see each hero name and id

Given a heroListView
When I click in a Hero
Then the heroDetails is displayed

3. DASHBOARD
Given a heroList
When I navigate to the dashboard
Then I can see the first 4 heroes of the list



input.value --> 

Escenarios

Spect

tour of Heroes (Vanilla JS) -> es js sin liberías ni fw ni nada

Hero - get name
     - set name
     - get id

{name: strin,
id: string}