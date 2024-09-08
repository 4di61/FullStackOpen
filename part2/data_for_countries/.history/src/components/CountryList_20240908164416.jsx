import CountryDetail from "./CountryDetail";

const CountryList = ({ countryList }) => {
    if (!countryList)
        return 
    if (countryList.length > 10) {
        return <div id="countryList">
            Too many matches, specify another filter
        </div>
    }
    if (countryList.length === 1) {
        return <div id="countryList">
            <CountryDetail detailed={} country={ countryList[0]} />
        </div>
    }
  return (
    <div id="countryList">
          {countryList.map((country) => <CountryDetail key={country.name} country={country} />)}
    </div>
  );
};

export default CountryList;
