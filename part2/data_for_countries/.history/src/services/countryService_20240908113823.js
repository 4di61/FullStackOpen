import axios from 'axios'

const url = "https://studies.cs.helsinki.fi/restcountries/api/name/"

const getAllCountries = () => {
    return axios.get(url).then((reponse)=>{
        return response.data
    })
}