import axios from 'axios'

const url = "http://api.weatherapi.com/v1/current.json?key=b4e&q=London"

const getWeather = () => (
    axios.get(url)   
)