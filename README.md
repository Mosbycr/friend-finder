# Friend Finder
An application that allows users to create a new profile with their name and photograph. They then answer 10 survey questions that will match them to another user that has the most in common. Once the survey is submitted the user's new best friend is displayed with a name and photograph in a modal.

Technologies utilized: HTML, Bootstrap4, jQuery, Node.js, Express.js, Heroku

See and use the launched application here: https://cryptic-plains-57563.herokuapp.com/

## Installation
In order to run this application from the computer you will need to:
* npm install express

## Getting Started
If you choose to install the program and use it off of your computer:
* visit the main page by going to localhost:3000
* visit the survey page directly by going to localhost:3000/survey
* visit the API json data page for the list of friends and their profile information by going to localhost:3000/api/friends

## User Directions
Once you have opened the application to the main page:
* click on the Go To Survey button - this will direct you to the survey page where users can add their profile
* add a name and a link to a profile picture
* answer all 10 questions with a number from 1 to 5 (1 being the least true and 5 the most true)
* hit the submit survey button - the new profile is added to the friends list and the program calculates the users best friend match
* upon hitting submit a modal will pop up with the name and picture of the users best match out of the profiles available

## Demos
The home page for Friend Finder:
![friendFinderMain](https://user-images.githubusercontent.com/46547100/57573624-8f9c9c80-73f8-11e9-84bb-a71356b5bec2.PNG)


The survey page for Friend Finder:
![friendFinderSurvey](https://user-images.githubusercontent.com/46547100/57573626-8f9c9c80-73f8-11e9-9b64-72cd1e3c3cd1.PNG)


The modal showing a user's best friend match:
![friendFinderModal](https://user-images.githubusercontent.com/46547100/57573625-8f9c9c80-73f8-11e9-994a-adf20164c45d.PNG)


The Api JSON containing all user's profiles and answers to the survey questions:
![friendFinderApiJson](https://user-images.githubusercontent.com/46547100/57573627-8f9c9c80-73f8-11e9-826d-ea090b3b88b4.PNG)
