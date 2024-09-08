import axios from 'axios'

const url = "http://api.weatherapi.com/v1/current.json?key=b4e1ff7b3b2247068a3112851240809&q=London"

const getWeather = () => (
    axios.get(url)   
)