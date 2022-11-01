# Phonebook
A fullstack web app that allows users to add contacts to their online phonebook. Live demo [_here_](https://json-phone-book.netlify.app/)

NOTE: Server may take up to 90 seconds to load. If no data has been loaded in 90 seconds, please refresh the webpage.

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Frontend Features](#frontend-features)   
* [Backend Features](#backend-features)
  * [GET](#get)
  * [POST](#post)
  * [PUT](#put)
  * [DELETE](#delete)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Project Status](#project-status)
* [To Do](#to-do)
* [Contact](#contact)
<!-- * [License](#license) -->


## General Information
This project was a part of my Fullstack Open coursework. The objectives were to learn how to:
  - render collections
  - handle forms in React
  - use Node and Express to develop a server
  - retrieve/alter data in the server
  - save data to MongoDB.


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
- Server hosted on [Render](https://fs-open-backend.onrender.com/api/persons). The following is the documentation for the REST API to GET, POST, PUT, or DELETE contacts.
### GET
  Returns json data for all stored contacts.

* **URL**
 https://fs-open-backend.onrender.com/api/persons

* **Method:**
  `GET`
  
*  **URL Params**
   **Required:**
  None

* **Data Params:**
  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    `[{ name : "Luke Skywalker", number : "010-959-3459", id : 635c26601126a3aaf5f12467 },
      { name: "Mace Windu", number: "301-460-0945", id: "635c25cb1126a3aaf5f1245b" }]`

* **Sample Call:**

  ```javascript
  app.get('/api/persons', (request, response) => {
    Person.find({})
    .then( person => {
        response.json(person);
    })
  });

  ```

Returns json data for a single contact.

* **URL**
 https://fs-open-backend.onrender.com/api/persons/:id

* **Method:**
  `GET`
  
*  **URL Params**
   **Required:**
   `id=[string]`

* **Data Params:**
  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ 
    id : 635c26601126a3aaf5f12467, name : "Luke Skywalker", number : "010-959-3459" 
    }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />

* **Sample Call:**

  ```javascript
   app.get('/api/persons/:id', (request, response) => {
    Person.findById(request.params.id)
    .then(person => {
        if (person){
             response.json(person)
        } else {
            response.status(404).end();
        }
    })
    .catch(error => next(error));
  }); 

  ```
----
### POST
  Returns json data for all contacts, including the newly added contact.

* **URL**
 https://fs-open-backend.onrender.com/api/persons

* **Method:**
  `POST`
  
*  **URL Params**
   **Required:** None

* **Data Params:**
  `name=[string] number=[string]`

* **Success Response:**

    **Content:** `[{ name : "Luke Skywalker", number : "010-959-3459", id : 635c26601126a3aaf5f12467 }, { name: "Mace Windu", number: "301-460-0945", id: "635c25cb1126a3aaf5f1245b" }, { name: "Darth Bane", number: "320-094-4954", id: "635c26011126a3aaf5f1245f" }] `
 
* **Error Response:**

  * **Code:** error: Name or number is missing <br />

* **Sample Call:**

  ```javascript
  app.post('/api/persons', (request, response) => {
    const body = request.body
  
    if (!body.name || !body.number) {
      return response.status(400).json({ error: 'Name or number is missing' })
    }
  
    const person = new Person({
      name: body.name,
      number: body.number
    })
  
    person.save().then(savedPerson => {
      response.json(savedPerson)
    })
  });

  ```
----
### DELETE
  Deletes a single contact.

* **URL**
 https://fs-open-backend.onrender.com/api/persons/:id

* **Method:**
  `DELETE`
  
*  **URL Params**
   **Required:**
   `id=[string]`

* **Data Params:**
  None

* **Success Response:**

  * **Code:** 204 <br />
 
* **Error Response:**

  * **Code:** ERROR <br />

* **Sample Call:**
  ```javascript
  app.delete('/api/persons/:id', (request, response) => {
    Person.findByIdAndRemove(request.params.id)
    .then( person => {
        console.log("Deleted");
        response.status(204).end();
    })
    .catch(error => next(error));
  });
  ```
  ----
### PUT
  Updates a single contact's phone number.

* **URL**
 https://fs-open-backend.onrender.com/api/persons/:id

* **Method:**
  `PUT`
  
*  **URL Params**
   **Required:**
   `id=[string]`

* **Data Params:**
`number=[string]`

* **Success Response:**

  * **Code:** `{ id : 635c26601126a3aaf5f12467, name : "Luke Skywalker", number : "301-500-2119" }` <br />
 
* **Error Response:**

  * **Code:** ERROR <br />

* **Sample Call:**
  ```javascript
  app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body

  const person = {
    name: body.name,
    number: body.number
  };

  Person.findByIdAndUpdate(request.params.id, person, { new: true })
    .then(updatedNote => {
      response.json(updatedNote)
    })
    .catch(error => next(error))
  });
  ```
  
## Screenshots
<img src="https://user-images.githubusercontent.com/63388515/199138593-fe1d337b-482d-4b85-8040-d829fe9e5ee5.png" width="990">

<img src="https://user-images.githubusercontent.com/63388515/199138847-f8d695b5-e666-4287-a1a0-40bc266d76d3.png" width="990">

<img src="https://user-images.githubusercontent.com/63388515/199139167-48fbe46c-55e9-4fa2-b08c-5236d00ca8f0.png" width="990">



## Setup
Front End: 
To run the react app, open a terminal and run the following commands: 
```
$ cd ./phonebook
$ npm install
$ npm start
```
Server: 
The server fetches data from a MongoDB database. In order for the server to fetch the data, a MongoDB connection string is needed. Use this [_link_](https://www.mongodb.com/docs/atlas/getting-started/?_ga=2.104022022.76030571.1667256481-1277371948.1666533578) to create a database. After a connection string has been generated, store it in the environment variable MONGODB_URI. Once the environment variable has been added, open a new terminal and run the following commands: 
```
$ cd ./backend
$ npm install
$ npm run dev
```

## Project Status
Project is: _in progress_ 

## To Do
- An edit button that allows users to update a contact's name or number.

## Contact
Contact me [here](https://makaylaandersontucker.netlify.app/contact.html)!

<!-- ## License -->
<!-- This project is open source and available under the [MIT License](). -->
