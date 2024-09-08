import Filter from "./components/Filter";
import CountryList from "./components/CountryList";
import { useState } from "react";
import countryService from "./services/countryService";

const App = () => {
  const [countryList, setCountryList] = useState([]);
  const [filterValue, setFilterValue] = useState("");

  const getFilteredCountryList = () => {
    return countryList.filter((country) => {
      return country.name.toLowerCase().includes
    })
  }
  countryService.getAllCountries().then((countries) => {
    setCountryList(countries);
  });
  
  return (
    <div>
      <Filter onTextChange={(text) => setFilterValue(text)} />
      {/* <CountryList/> */}
    </div>
  );
};

export default App;
