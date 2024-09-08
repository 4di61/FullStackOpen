import axios from 'axios'

const api_key = import.meta.env.VITE_WEATHER_API_KEY;
const url = `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=London`

const getWeather = () => (
    axios.get(url)   
)