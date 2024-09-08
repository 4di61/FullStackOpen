const Filter = ({ onTextChange }) => {
  return <div id="filter">
    find countries
    <input type="text" onChange={onTextChange()} />
  </div>;
};

export default Filter;
