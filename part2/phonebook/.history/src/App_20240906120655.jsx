import { useState } from 'react'

const Filter = ({onFilterChange}) => {
  return <>
  filter shown with 
  <input type="text" onChange={onFilterChange} />
  </>
}

const PersonForm = ({ onSubmit, newName, newNumber, onNameChange, onNumberChange}) => {
  return <form onSubmit={onSubmit}>
        <div>
          name: <input value={newName} onChange={onNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={onNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
}

const Persons = ({list}) => {
  return <ul>
  {list.map(person => <li key={person.id}>{person.name} { person.number}</li>)}
</ul>
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setFilter] = useState('')

  const onFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const getFilteredList = () => {
    return persons.filter((person) => {
      return person.name.toLowerCase().includes(newFilter.toLowerCase())
    })
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const addNewPerson = (event) => {
    event.preventDefault();
    if (!persons.map(person => person.name).includes(newName))
      setPersons([...persons, { name: newName, number: newNumber }])
    else
      alert(`${newName} is already added to phonebook`)
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onFilterChange={onFilterChange} />
      <h2>Add a new</h2>
      <PersonForm onNameChange={handleNameChange} onNumberChange={handleNumberChange} newName={newName} new/>
      <h2>Numbers</h2>
      <Persons list={getFilteredList()} />
    </div>
  )
}

export default App