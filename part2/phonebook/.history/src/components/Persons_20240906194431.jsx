const Persons = ({ list }) => {
  return (
    <ul>
      {list.map((person) => (
        <li key={person.id}>
          {person.name} {person.number}
          <button>delete</button>
        </li>
      ))}
    </ul>
  );
};
export default Persons;
