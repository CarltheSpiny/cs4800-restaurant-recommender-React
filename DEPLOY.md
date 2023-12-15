# CS480 Restaurant Recommender

The following is the compliation of instructions to install the 
dependencies of each part of the application and get them running.
Individual instructions can be found in their respective README.md files

Note: the following commands are done with powershell and assumes you have elevated permissions to install
these dependencies. You will aslo need an internet connection and a browser to render the site.

## Requires

- [nodejs](https://nodejs.org/en/)
alternatively, if you have choclately installed:
- choco install -y nodejs-lts microsoft-openjdk11
- react-native

## Install
 
(In project root folder)
```
npm install i -D @craco/craco

npm install react-router-dom

npm install opencage-api-client
```

## Setup Configuration Files

Assuming you pulled from the github repo (Link:https://github.com/CarltheSpiny/cs4800-restaurant-recommender-React.git), you can then
initialize the project and configure some dependencies with;

```
npx react-native@latest init cs4800-restaurant-recommender-React
```

## Run

frontend:
```
npm start
```

To have an optimized build, use:
```
npm run build
````
To do so. This is also the build that is used on the live website,
which can be served to the S3 bucket with the AWS CLI and the proper credentials
9Outside of the scope of this deployment note)