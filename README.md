# Programming Question
### Current Setup
In this project, there is currently an endpoint implemented that allows you to get information about a Pokemon using its name

- Under the src\pokemon folder of the project, you will see that there is a class called Pokemon that currently allows users to get one Pokemon by its name

- In the src\index.ts file, you will see that a get endpoint has been setup for /pokemon, that allows the user to get a Pokemon by name using the Pokemon class.

### Required New Functionality

- Modify the existing endpoint to parse the 'name' parameter as a comma separated list of names. You may use any existing methods in your implementation. 

- You will then call the pokemon api and retrieve each pokemon requested in the list of names
**Make sure you read the api docs carefully before implementing this**

- Ensure that there is proper error handling, if one of the names is invalid, you should handle this while still returning information about all valid pokemon.

### Request Format
The request parameter has the following format:
```
?name="Pikachu,Squirtle,INVALIDNAME"
```

Your response json should have the following format and should only include the following fields: 
```
{
    data: [
        {
            id: 1,
            name: 'Pikachu',
            height: 35,
            weight: 20,
            moves: ['a', 'b', 'c'] (list of move names)
        },
        {
            id: 2,
            name: 'Squirtle',
            height: 42,
            weight: 30,
            moves: ['e', 'f', 'g'] (list of move names)
        },
    ],
    error: "Some pokemon names were invalid"
}


```

# Passing Criteria & Submitting

#### Code Quality
Keep code strongly typed with good coding practices, and **use the await/async model** when performing `Promises` within TypeScript
#### Document your code!
Document all of your functions with statement blocks using the @param and @returns annotations
#### Test your code!
Add 2 tests for every function written, one that expects to pass and one that expects to fail. Your tests should go in the tests\pokemon-test.ts file. **A minimum of 2 tests is expected**
#### Submitting
Before you start your task, **make a fork of this repository**. Once you have completed your task, or the allotted hour has passed, commit your solution to a branch in your forked repo with the branch name in the following format: firstname-lastname, and make a pull request. 

# Setup

Make sure you have the following installed:
```
NodeJS 10.x, x > 10
NPM
```
Open the project in your favourite TypeScript editor. I recommend that you use [Visual Studio Code](https://code.visualstudio.com/download) in order to start working on the project

# Building the project
Go to the root of the project (folder with the package.json) folder and run the following commands: 
```
npm install
npm run start
```

To run the unit test, run the following commands:
``` 
npm install
npm run test
```


# Helpful Links


[Api Documentation](https://pokeapi.co/docs/v2#pokemon)


[Typescript Docs](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html)

[expressJs](https://expressjs.com/en/4x/api.html)

[node-fetch Docs](https://www.npmjs.com/package/node-fetch)



# Interview Rooms
### Technical Interview Room (Join this room if you have questions while doing the interview)
TBD

### UOttawa Interviews: (Join this room for your scheduled personal interview if you are from UOttawa)
TBD

