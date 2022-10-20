import React, {useEffect, useState} from 'react';
import { confirm } from 'react-confirm-box';
import Form from './components/Form';
import personService from './services/person';


const Person = ({ person, deletePerson }) => {
  console.log(person.name);
  const capitalize = (str) => {
    return str.replace(/^(.)|\s+(.)/g, c => c.toUpperCase()); //utilized code from codegrepper. Capitalizes the first letter of each word
  }
  return (
  <li>This is {capitalize(person.name)} and phone number is: {person.number} <button onClick={deletePerson}>Delete</button>
  </li>
  );
};

const Filter = ({ array, query, delete1 }) => {
  const save = array.map(element => {
    return ({
        ...element,
        name: element.name.toLowerCase()
      })
  });
  console.log("This is the array passed with lowercase", save);

  const result = save.filter( element => element.name.includes(query) );
  console.log("This is the query variable", query);
  console.log("This is the result variable", result);

  const display = result.map( element => <Person key={element.id} person={element} deletePerson={() => delete1(element.id)} /> );
  console.log("This is the display variable", display)
  return (
    <div>
      <h2>Filtered Results</h2>
      {display}
    </div>
  )
};

const Notice = () => {
  return (
    <div className='notice'>
      <p>To use this app, please click <a href="https://github.com/makaylacodes/react-phonebook" target="_blank" >here</a> to access the github repo.</p>
      <p>Step 1: Pull repo onto your machine.</p>
      <p>Step 2: Open a terminal and use command <strong>cd phonebook</strong>.</p>  
      <p>Step 3: Run command <strong>npm run start</strong>.</p>
      <p>Step 4: Open a new terminal and run command <strong>npm run server</strong>.</p>
      <p>The app should be working now! </p>
    </div>
  )
}

const Footer = () => {
  return (
    <footer id="footer">
        <p >&copy; Copyright 2022 <br />
        Built with &#x2661; by <a className="link" href="https://github.com/makaylacodes/react-phonebook" target="_blank">
        Makayla Anderson-Tucker
        </a>
        </p>
      </footer>
  );
};

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [numbers, setNumbers] = useState('');
  const [searchs, setSearchs] = useState([]);
  
  const hook = () => {
    personService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
    });
  };

  useEffect(hook, []);

  //utilizing react-confirm-box alert instead of window.confirm
  const delete1 = async (id) => {
    const result = await confirm("Are you sure?");
    
    if (result){
      console.log("Yes was clicked");
      return (
        personService
          .deleteOne(id)
          .then(updatedList => {
            setPersons(persons.filter(person => person.id !== id))
          })
          .catch(error => {
            alert(`the note ${persons.name} has already been deleted from the server`);
            setPersons(persons.filter(person => person.id !== id))
          })
      ) 
    }
    console.log("No was clicked");
  };

   //utilizing react-confirm-box alert instead of window.confirm
   const update1 = async (id, personObject) => {
    const result = await confirm(`${newName} already exists in the phonebook. Do you want to replace the old number with the new one?`);
    
    if (result){
      console.log("Yes was clicked");
      const person = persons.find(person => person.id === id);
      console.log(`This is the person object ${person}`);

      const changedPerson = { ...person};
      changedPerson.number = personObject.number;
      console.log(`This is the cchangedy ${changedPerson}`)
      return (
        personService
          .updateOne(id, changedPerson)
          .then(updatedPerson => {
            setPersons(persons.map(person => person.id !== id ? person : updatedPerson))
            setNewName('');
            setNumbers('');
          })
      );
    }

    console.log("No was clicked");
  };
  
  const addPerson = (event) => {
    event.preventDefault();

    const personObject = {
      name: newName,
      number: numbers
    };

    const person = persons.find(person => person.name.toLowerCase().includes(newName.toLowerCase()) );
    console.log("This is the person containing result", person)
    console.log("This is the new number ", personObject.number);
    console.log("This is the person object with new number", personObject)

    const result =  persons.find(person => person.name.toLowerCase() === newName.toLowerCase() ) //if name is found in the db
    ? update1(person.id, personObject) //user is given choice to update the phone number
    : personService //if name is not found, the new person is added to the db
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson));
        setNewName('');
        setNumbers('');
      });

      return result;
  };
  
  
   const handleNameChange = (event) => {
    setNewName(event.target.value);
   }
  
   const handleNumberChange = (event) => {
    setNumbers(event.target.value);
   };
  
   const handleSearchChange = (event) => {
    setSearchs(event.target.value);
   };
 
  
  return (
    <div>
      <ol>
        <Form addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} handleSearchChange={handleSearchChange} searchs={searchs} numbers={numbers}/>
        <Filter array={persons} query={searchs} delete1={delete1} />
        
      </ol>
      <Notice />
      <br />
      <Footer />
      
    </div>
  );
};

export default App;
