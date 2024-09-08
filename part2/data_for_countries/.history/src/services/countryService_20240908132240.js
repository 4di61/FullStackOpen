import axios from "axios";

const url = "https://studies.cs.helsinki.fi/restcountries/api/all/";

// name.common languages flag capital area
const getAllCountries = () => {
  return axios.get(url).then((response) => (
    response.data.map((country) => (
      country.name.common,
        country.languages,
        country.flag,
        country.capital,
        country.area;
    });
  ));
};

export default { getAllCountries };
