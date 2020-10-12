Description:

As a animal lover
I want an app
So that I can find lost animals and report them
 
STAGE ONE - REGISTER
 
Given a <name>,<lastName>,<userName>,<password>,<password-Confirmation> and <email>
When I signup
Then I can acces to the user profile page
 
STAGE TWO- LOGIN
 
Given a <userName> and <password> with permissons
When I login
Then I can access on the app

STAGE THREE- WRONG LOGIN
 
Given a <userName> and <password> without permissons
When I login
Then I can't access on the app
 
STAGE FIVE - PROFILE
 
Given a <logged_user>
When I go to the profile
Then I can see and edit my personal info and change my password

Given a <logged_user>
When I go to the profile
Then I can do logout and it be redirected to signin page

Given a <logged_user>
When I go to the profile
Then I can see the alerts that i create and that i follow
 
STAGE SIX - HOME PAGE
 
Given a <logged_user>
When I access on the home page
Then I can see a list of recently created alerts by me or other users.

Given a <logged_user>
When I access on the home page
Then I can see a list of most created alert categories

Given a <logged_user>
When I access on the home page
Then I can search by location, categories, by date or by description

Given a <logged_user>
When I access on the home page
Then I can navigate from the different pages of the app

Given a <logged_user>
When I select an alert
Then I will be redirected to the full info alert

Given a <logged_user>
When I select a category
Then I will see the full list of alerts by this category of animal
 
STAGE SEVEN - ALERT DETAIL

Given a <logged_user>
When I select an alert
Then I will see the full alert description

Given a <logged_user>
When I select an alert
Then I want to archieve it

STAGE SEVEN - ALERT FORM

Given a <logged_user>
When I click create an alert
Then I will see a alert form and can create a new alert

STAGE EIGHT - UI

Given a <user>
When I use the app on diferent devices
Then I will see the app is responsive

STAGE NINE - APP

Given a <admin_user>
When I acces to the app
Then I want to do crud operations

STAGE NINE - CATEGORIES

Given a <logged_user>
When I acces to the categories
Then I can see all kind of animals and select one

Given a <logged_user>
When I select one category
Then I can see all list of alerts of this category





























This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
