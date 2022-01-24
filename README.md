# Note Taker
GitHub Link: https://github.com/Chris-Tijerina/note-taker-ctijerina 
Heroku Deployed Link: https://secure-earth-43939.herokuapp.com/ 


## Description
Your Task
Note Taker is an application that can be used to write and save notes. This application uses Express.js for the back end and will save and retrieve note data from a JSON file. 

> The front end and index files were already provided from the forked repository. All I needed to add was a proper HTML and API routes to populate the application on the browser and fill in the functionality to write new notes and have them saved and updated in the page. I decided to go with a ```writeFileSync``` because they file isn't too large and it doesn't require a callback function. I also used the join function to put the new notes into the array of the previous notes. 

There was a bonus functionality wanted, which was the ability to delete notes.

>This functionality was added, but with some issues. 

## Instruction 

> In order to use this application you will have to download the repository, or clone it, and open it up in your chosen terminal (Vs.Code, GitBash, Terminal for Mac, etc.). Then you will have to ensure that node package manager has been installed (using "npm install" in the terminal) and you'll need to install express as well, (by typing "npm install express" into your terminal). Lastly, in order for the unique id function to work, you will need to install uuid (by typing "npm install uuid"). You can then run the application by typing "npm start" and visiting the http://localhost:3001/. if you want to deploy the app to a live server, you can use Heroku as I did. (information at https://signup.heroku.com/). Insomnia can be used for testing!

## Licenses
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)
![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)

## Contributing
If you would like to contribute: 

> Fork the repo and create your branch from master. If you've added code that should be tested, add tests. If you've changed APIs, update the documentation. Ensure the test suite passes. Make sure your code lints and report any bugs by opening a new issue. 

## Questions

> If you have any questions contact me at ctijerina@live.com or through my Github Link: https://github.com/Chris-Tijerina