import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import PersonServices from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setFilter] = useState('')

  useEffect(() => {
    PersonServices.getAll().then(
      (response) => {
        console.log(response)
        setPersons(response)
      }
    )
  },[])

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
    if (!persons.map(person => person.name).includes(newName)) {
      const newPerson = {name: newName, number: newNumber}
      PersonServices.create(newPerson).then((changedPerson) => {
        setPersons([...persons, changedPerson])
      })
    }
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
      <PersonForm onNameChange={handleNameChange} onNumberChange={handleNumberChange} newName={newName} newNumber={newNumber} onSubmit={addNewPerson}/>
      <h2>Numbers</h2>
      <Persons list={getFilteredList()} />
    </div>
  )
}

export default App