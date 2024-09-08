const Filter = ({ onTextChange }) => {
  return <div id="filter">
    find countries
    <input type="text" onChange={(event)=>onTextChange(text)} />
  </div>;
};

export default Filter;
