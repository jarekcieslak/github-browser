# Github Browser

## About the app


Application was developed mainly in React with TypeScript. Technologies used:  

*   React
*   Redux
*   Redux thunk
*   Material UI
*   Typescript

React + Redux + Typescript was enforced by the project constraints. Material UI was chosen to provide some basic styling and components. Application state was pretty small, but was handled using redux.  

**Disclaimer**: Application was developed with TypeScript, but personally I think that React dependencies do not have good typings on npm. If good typescript support is needed then I'd probably use Angular2+. It's fully developed in typescript and it's dependencies tend to have more up to date typings.

## Features


Create a single page application that displays a list of Github users by using the Github public API with an option to display detailed user data on a separate page.  

*   A list of GitHub users (avatar, login) is displayed.
*   The list should support pagination.
*   Click on the user avatar in the list to see the user details with a back button to go back to the initial list of users.
*   Single user page should display the user data after refreshing the page.
*   The web application should be responsive.
*   The project should be delivered as a GitHub repository.

## Installation
Install it and run:

```
npm install
npm start
```

Build:
```
npm build
```
and place built files on a web-server.
