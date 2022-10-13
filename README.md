## Project Name

Take home a React exercise

An react application used to display topics/termn  and related topics using GraphQL API `https://api.github.com/graphql` , built with React, GraphQL apollo client library and bootstrap UX Library

## Project Functionality

To test the application enter a Topic in the input field to search eg: react,  java , javascript etc...
And then click the blue botton to search the results.

## Project Screen Shot(s)

#### Example:   

<img width="255" alt="IMG01" src="https://user-images.githubusercontent.com/5749839/195664412-28df4b3d-38a5-46a8-8580-8f49af73a741.PNG">

<img width="685" alt="IMG02" src="https://user-images.githubusercontent.com/5749839/195664453-5f46005f-4578-4ddb-b429-e9ee308ec0e8.PNG">

## Installation and Setup Instructions

#### Example:  

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

#### Important
After cloning
To communicate with the GraphQL server, you'll need an OAuth token with the right scopes.

Follow the steps in "Generate a personal access token" on [Github Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) to create a token.
And then change the .env file in the root of the repository with your personal token to work in development enviroment
<img width="284" alt="IMG03" src="https://user-images.githubusercontent.com/5749839/195667166-67449c0c-b925-4872-9324-6d23c0fa0baf.PNG">

Save the file and then Run the installation

Installation:

`npm install`  to install all the dependencies like apollo client, bootstrap 

To Start Server:

`npm start`  

Runs the app in the development mode.\
Open http://localhost:3000 to view it in your browser.

To Run Test Suite:  

`npm test` 

##
Future Improvements

Code Structuring:
  Create a SearchBar component
 
Additional Features:
  Add a loading spinner on every search of term
  Manage Errors with UX Design
