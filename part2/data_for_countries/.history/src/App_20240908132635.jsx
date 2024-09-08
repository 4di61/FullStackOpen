import Filter from "./components/Filter";
import CountryList from "./components/CountryList";
import { useState } from "react";
import countryService from "./services/countryService";

const App = () => {
  const [countryList, setCountryList] = useState([]);
  const [fil]

  countryService.getAllCountries().then((countries) => {
    setCountryList(countries);
  });
  return (
    <div>
      <Filter />
      {/* <CountryList/> */}
    </div>
  );
};

export default App;
