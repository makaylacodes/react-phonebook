# Phonebook
> A fullstack web app that allows users to add contacts to their online phonebook
> Live demo [_here_](https://json-phone-book.netlify.app/). <!-- If you have the project hosted somewhere, include the link here. -->

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Frontend Features](#frontend-features)
* [Backend Features](#backend-features)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Project Status](#project-status)
* [To Do](#to-do)
* [Acknowledgements](#acknowledgements)
* [Contact](#contact)
<!-- * [License](#license) -->


## General Information
- This project allows users to store their contacts on a serverless backend. I took on this project to learn how to develop a front end and a backend.


## Technologies Used
- Axios - version 1.1.3
- CORS - version 2.8.5
- Dotenv - version 16.0.3
- Express - version 4.18.2
- JSON-Server - version 0.17.0
- Mongoose - version 6.7.0
- Nodemon - version 2.0.20
- React - version 18.2.0

## Frontend Features
- Search for a specific contact by name
- Add an unlimited number of contacts
- Update a contact's number

## Backend Features
- Search for a specific contact by name
- Add an unlimited number of contacts

## Screenshots
![Example screenshot](./img/screenshot.png)
<!-- If you have screenshots you'd like to share, include them here. -->


## Setup
Front End: To run the react app, open a terminal and run the following commands: 
```
$ cd ./phonebook
$ npm install
$ npm start
```
Server: The server fetches data from a MongoDB database. In order for the server to fetch the data, a MongoDB connection string is needed. Use this [_link_](https://www.mongodb.com/docs/atlas/getting-started/?_ga=2.104022022.76030571.1667256481-1277371948.1666533578) to create a database. Once a connection string has been generated, it should be stored as an environment variable. Once the environment variable has been added, open a new terminal and run the following commands: 
```
$ cd ./backend
$ npm install
$ npm run dev
```

## Project Status
Project is: _in progress_ 

## To Do
- An edit button that allows users to update a contact's name or number.

## Acknowledgements
- This project was completed as a part of the full-stack open course.

## Contact
Contact me [here](https://makaylaandersontucker.netlify.app/contact.html)!

<!-- ## License -->
<!-- This project is open source and available under the [MIT License](). -->
