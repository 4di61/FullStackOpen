import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleInputChange = ()

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={}/>
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