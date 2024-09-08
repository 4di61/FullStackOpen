import Filter from "./components/Filter";
import CountryList from "./components/CountryList";
import { useState } from "react";
import countryService from "./services/countryService";

const App = () => {
  const [countryList, setCountryList] = useState([]);
  const [filterValue, setFilterValue] = useState("");

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
