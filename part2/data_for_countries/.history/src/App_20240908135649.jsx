import Filter from "./components/Filter";
import CountryList from "./components/CountryList";
import { useEffect, useState } from "react";
import countryService from "./services/countryService";

const App = () => {
  const [countryList, setCountryList] = useState([]);
  const [filterValue, setFilterValue] = useState("");

  const getFilteredCountryList = () => {
    return filterValue && countryList.filter((country) => {
      return country.name.toLowerCase().includes(filterValue.toLowerCase())
    })
  }

  useEffect(() => {
    countryService.getAllCountries().then((countries) => {
      setCountryList(countries);
    });
  },[])
  
  return (
    <div>
      <Filter onTextChange={(text) => setFilterValue(text)} />
      <CountryList countryList={getFilteredCountryList()}/>
    </div>
  );
};

export default App;
