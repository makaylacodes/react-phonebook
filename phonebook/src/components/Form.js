
const Button = ({ text }) => <button type="submit">{text}</button>;

const Form = ({ addPerson, newName, handleNameChange, handleNumberChange, handleSearchChange, searchs, numbers }) => {
    return (
        <div>
          <h2>Phonebook</h2>
      
          <form onSubmit={addPerson}>
            <h4>Name: <input value={newName} placeholder="Enter name..." onChange={handleNameChange} /></h4> 
            <h4>Number: <input value={numbers} placeholder="Enter phone number..." onChange={handleNumberChange} /></h4>
            <Button text="Add" />
            <h4>Search: <input value={searchs} placeholder="Enter a name..." onChange={handleSearchChange} /> </h4>
            
          </form>
        </div>
       )
};

export default Form;