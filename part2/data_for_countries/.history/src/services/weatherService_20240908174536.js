import axios from "axios";

const api_key = import.meta.env.VITE_WEATHER_API_KEY;
const url = `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=`;

const getWeather = (country) =>
  axios.get(url.concat(country)).then((request) => {
    const currentWeather = request.data.current;
    return {
      temperature: currentWeather.temp_c,
      condition: currentWeather.condition.icon,
      wind: currentWeather.wind_kph,
    };
  });

export default { getWeather };
