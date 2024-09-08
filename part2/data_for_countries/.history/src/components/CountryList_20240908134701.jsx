import CountryDetail from "./CountryDetail";

const CountryList = ({ countryList }) => {
    
    if (countryList.length > 10) {
        <div id="countryList">
            Too many matches, specify another filter
        </div>
    }
  return (
    <div id="countryList">
      {countryList.map((country) => CountryDetail(country))}
    </div>
  );
};

export default CountryList;
