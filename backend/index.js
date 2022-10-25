
const express = require("express");
const app = express();

//activates json-parser
app.use(express.json());

const cors = require("cors");
app.use(cors());
const dotenv = require('dotenv').config();
app.use(dotenv());
let persons = [
    {
      "name": "Arto Hellas",
      "number": "4340",
      "id": 1
    },
    {
      "name": "Ada Lovelace",
      "number": "39-44-5323523",
      "id": 2
    },
    {
      "name": "Dan Abramov",
      "number": "12-43-234345",
      "id": 3
    },
    {
      "name": "Mary Poppendieck",
      "number": "39-23-6423122",
      "id": 4
    },
    {
      "name": "Ser meryn trant",
      "number": "222-222",
      "id": 6
    },
    {
      "name": "vaeghar lacedyxx",
      "number": "3533-0695",
      "id": 8
    },
    {
      "name": "blueberry man",
      "number": "39293204",
      "id": 9
    },
    {
      "name": "Muffin Man",
      "number": "994-333-6943",
      "id": 10
    }
  ];

app.get("/api/persons", (request, response) => {
    response.json(persons);
});

app.get("/api/persons/:id", (request, response) => {
    const id = Number(request.params.id);
    console.log("This is id ", id);
    const person = persons.find(person => person.id === id);
    if (person){
        response.json(person);
    } else{
        response.status(404).end();
    }
});

app.delete("/api/persons/:id", (request, response) => {
    const id = Number(request.params.id);
    persons = persons.filter(person => person.id !== id);
    response.status(204).end();
});
app.use(express.json());
const generateId = () => {
    const maxId = persons.length > 0
    ? Math.max(...persons.map(p => p.id ))
    : 0
    return maxId + 1;
};

app.post("/api/persons", (request, response) => {
    const body = request.body;

    if(!body.name || !body.number){
        return response.status(400).json({ error: "content missing"})
    }

    const person = {
        name: body.name,
        number: body.number,
        id: generateId()
    };

    persons = persons.concat(person);
    response.json(person);
});



const PORT = process.env.PORT || 3005;
app.listen(PORT, ()=>{
    console.log("Server is running on port ", PORT);
});
