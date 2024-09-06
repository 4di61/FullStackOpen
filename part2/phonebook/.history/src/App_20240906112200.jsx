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
    if (!persons.map(person => person.name).includes(newName))
      setPersons([...persons, { name: newName }])
    else {
      alert("${newName} is already added to phonebook")
  }
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewName}>
        <div>
          name: <input vlaueonChange={handleInputChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>

      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <li key={person.name}>{person.name}</li>)}
      </ul>
      <div>
          
        </div>
    </div>
  )
}

export default App