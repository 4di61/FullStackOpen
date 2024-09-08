import CountryDetail from "./CountryDetail";

const CountryList = ({ countryList }) => {
    console.log(countryList);
    if (!countryList)
        return <></>
    if (countryList.length > 10) {
        return <div id="countryList">
            Too many matches, specify another filter
        </div>
    }
  return (
    <div id="countryList">
      {countryList.map((country) => )}
    </div>
  );
};

export default CountryList;
