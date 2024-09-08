import axios from "axios";

const url = "https://studies.cs.helsinki.fi/restcountries/api/all/";

// name.common languages flag capital area
const getAllCountries = () => {
  return axios.get(url).then((response) => (
    response.data.map((country) => (
        {
            name: country.name.common,
            languages: country.languages,
            flag: country.flag,
            capital: country.capital,
            country.area
        }
    ));
  ));
};

export default { getAllCountries };
