const Filter = ({ onTextChange }) => {
  return <div id="filter">
    find countries
    <input type="text" onChange={(text)=>onTextChange(text)} />
  </div>;
};

export default Filter;
