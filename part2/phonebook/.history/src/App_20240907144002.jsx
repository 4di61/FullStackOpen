import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import PersonServices from "./services/persons";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setFilter] = useState("");
  const [notification, setNotification] = useState({
    message: null,
    isError: false,
  });

  useEffect(() => {
    PersonServices.getAll().then((persons) => {
      setPersons(persons);
    });
  }, []);

  const onFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleNotification = (message, isError) => {
    setNotification({ message, isError });
    setTimeout(
      () =>
        setNotification({
          message: null,
          isError: false,
        }),
      5000
    );
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
    if (!(newName && newNumber)) {
      alert("Empty values are not allowed");
    } else {
      const matchPerson = persons.find(
        (person) => person.name.toLowerCase() === newName.toLowerCase()
      );

      if (!matchPerson) {
        const newPerson = { name: newName, number: newNumber };
        PersonServices.create(newPerson).then((changedPerson) => {
          setPersons([...persons, changedPerson]);
          handleNotification(`Added ${changedPerson.name}`);
        });
      } else {
        if (
          confirm(
            `${newName} is already added to phonebook, replace the old number with a new one?`
          )
        ) {
          const updatedPerson = {
            ...matchPerson,
            number: newNumber,
          };
          PersonServices.update(matchPerson.id, updatedPerson).then(
            (changedPerson) => {
              setPersons(
                persons.map((person) =>
                  person === matchPerson ? changedPerson : person
                )
              );
              handleNotification(`${changedPerson.name} contact info changed`);
            }
          );
        }
      }
      setNewName("");
      setNewNumber("");
    }
  };

  const findPersonByID = (id) => {
    return persons.find((person) => person.id === id);
  };

  const deletePerson = (id) => {
    const matchPerson = findPersonByID(id);
    if (confirm(`Delete ${matchPerson.name}?`))
      PersonServices.remove(id)
        .then((deletedPerson) => {
          setPersons(
            persons.filter((person) => person.id !== deletedPerson.id)
          );
          handleNotification(`Deleted ${deletedPerson.name}`);
        })
        .catch((error) => {
          handleNotification(
            `${matchPerson.name} has already been removed from the system`,
            (true)
          );
          setPersons(persons.filter((person) => person.id !== id));
        });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} />
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
