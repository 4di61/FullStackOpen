const Filter = ({ onTextChange }) => {
  return <div id="filter">
    find countries
    <input type="text" onChange={(event)=>onTextChange(event.target.value)} />
  </div>;
};

export default Filter;
