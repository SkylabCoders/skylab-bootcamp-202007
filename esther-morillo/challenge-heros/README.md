# Hero definition

As a hero collector
I want a componet web
So that I can select a hero

Hero {
id: number;
name: string;
}

SCENARIOS

1. Hero Details
Given a Hero
When I navigate to the details view
Then heroId and heroName are displayed;

| heroName | heroId |
| Magneta | 15 |

Given a Hero details view
When I input a newName
Then the heroName property is updated

2. Hero List
Given a heroList
When I navigate to the list view
Then I can see each hero name and id

Given a heroListView
When I click in a Hero
Then the heroDetails is displayed

3. Dashboard
Given a heroList
When I navigate to the dashboard
Then I can see the first 4 heroes of the list