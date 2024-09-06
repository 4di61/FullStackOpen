import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import PersonServices from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setFilter] = useState("");

  useEffect(() => {
    PersonServices.getAll().then((persons) => {
      setPersons(persons);
    });
  }, []);

  const onFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const getFilteredList = () => {
    return persons.filter((person) => {
      return person.name.toLowerCase().includes(newFilter.toLowerCase());
    });
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const addNewPerson = (event) => {
    event.preventDefault();
    if (!(newName || newNumber)) {
      alert("Empty values are not allowed");
      return;
    }
    const matchPerson = persons.find((person)=>person.name.toLowerCase()===newName.toLowerCase())
    if (!matchPerson) {
      const newPerson = { name: newName, number: newNumber };
      PersonServices.create(newPerson).then((changedPerson) => {
        setPersons([...persons, changedPerson]);
      });
    } else {
      if (
        confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        PersonServices.update(matchPerson.id,{...matchPerson,number:new})
      }
    }
    setNewName("");
    setNewNumber("");
  };

  const findPersonByID = (id) => {
    return persons.find((person) => person.id === id);
  };

  const deletePerson = (id) => {
    if (confirm(`Delete ${findPersonByID(id).name}?`))
      PersonServices.remove(id).then(() => {
        setPersons(persons.filter((person) => person.id !== id));
      });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onFilterChange={onFilterChange} />
      <h2>Add a new</h2>
      <PersonForm
        onNameChange={handleNameChange}
        onNumberChange={handleNumberChange}
        newName={newName}
        newNumber={newNumber}
        onSubmit={addNewPerson}
      />
      <h2>Numbers</h2>
      <Persons list={getFilteredList()} onDelete={deletePerson} />
    </div>
  );
};

export default App;
