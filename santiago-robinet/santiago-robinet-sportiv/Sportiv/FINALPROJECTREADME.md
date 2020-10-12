As a sport lover
I want an sport app
So that I can find people who likes the same sport as me and can meet them to enjoy together


STAGE ONE - REGISTER

Given a <fullname>, <user.name>, <user.emial> <user.password>
When I sign up
Then I can acces to the app


STAGE TWO- LOGIN

Given a <user.name> and <user.password>
When I login 
Then I can see the home page with events, groups and classes sections 

STAGE THREE- WRONG LOGIN

Given a wrong <user.name> or <user.password>
When I try to
Then I cant acces the app

STAGE FOUR - PREFERENCES

Given a <user.preference>
When I go to the events page
Then I can see "X" matched events with that preferences

Given a <user.preference>
When I go to the groups page
Then I can see "X" matched groups with that preferences

Given a <user.preference>
When I go to the classes page
Then I can see "X" matched classes with that preferences


STAGE FOUR - EVENTS, GROUPS AND CLASSES

Given a list of <events>
When I see an event that I wold like to go
Then I can can register to it

Given a list of <groups>
When I see a group that matches with my interests
Then I can join them

Given a list of <classes>
When I see a class that I like to take
Then I can can register to it


STAGE FIVE - VOTE TEACHERS

Given a <class>
When I take a class that I like
Then I can thumb up the teacher

Given a <class>
When I take a class that I dont like
Then I can thumb down the teacher


STAGE SIX - COMENT TEACHERS CLASSES

Given a <class>
When I take a class that I like or not 
Then I can comment into teacher profile



