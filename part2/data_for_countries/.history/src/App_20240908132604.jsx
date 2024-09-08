import Filter from "./components/Filter";
import CountryList from "./components/CountryList";
import { useState } from "react";
import countryService from "./services/countryService";

const App = () => {
  const [countryList, setCountryList] = useState([]);


  countryService.getAllCountries().then((countries) => {
    set
  });
  return (
    <div>
      <Filter />
      {/* <CountryList/> */}
    </div>
  );
};

export default App;
