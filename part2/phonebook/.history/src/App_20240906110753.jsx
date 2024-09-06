import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleInputChange = (event) => {
    // console.log(event.target.value);
    setNewName(event.target.value);
  }

  const addNewName = (event) => {
    event.preventDefault();
    setPersons({})
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewName}>
        <div>
          name: <input onChange={handleInputChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>

      </form>
      <h2>Numbers</h2>
      <div>
          {persons.map(person => person.name)}
        </div>
    </div>
  )
}

export default App