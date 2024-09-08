import CountryDetail from "./CountryDetail";

const CountryList = ({ countryList }) => {
    if(countryList.length)
  return (
    <div id="countryList">
      {countryList.map((country) => CountryDetail(country))}
    </div>
  );
};

export default CountryList;
