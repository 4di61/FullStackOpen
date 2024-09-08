import CountryDetail from "./CountryDetail";

const CountryList = ({ countryList }) => {
    if(countryList.length>10)
  return (
    <div id="countryList">
      {countryList.map((country) => CountryDetail(country))}
    </div>
  );
};

export default CountryList;
