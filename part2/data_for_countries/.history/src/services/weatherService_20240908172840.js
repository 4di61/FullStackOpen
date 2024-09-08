import axios from 'axios'

const api_key = 
const url = "http://api.weatherapi.com/v1/current.json?key=${}&q=London"

const getWeather = () => (
    axios.get(url)   
)