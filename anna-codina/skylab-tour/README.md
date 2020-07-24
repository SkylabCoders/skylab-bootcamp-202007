Skylaber definition
Skylaber {
id: number;
name: string;
completedChallenges: number;
address: {
city: string;
country: string
}

1. Skylaber Details
   Given an Skylaber
   When I navigate to the details view
   Then Skylaber Id and Name are displayed;

Given an Skylaber details view
When I input a newName
Then the Name property is updated

2. Skylaber List
   Given a List
   When I navigate to the list view
   Then I can see each Skylaber name and id

Given a List View
When I click in a Skylaber
Then the Details are displayed

Given a List View
When input any value
Then I can see a list with the matching Skylabers

3. Dashboard
   Given a List
   When I navigate to the dashboard
   Then I can see the 4 Skylabers of the list that completed more than 4 challenges
