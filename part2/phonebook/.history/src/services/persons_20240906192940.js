import axios from 'axios'

const url = "http:3001/persons"

const getAll = () => {
    return axios.get(url).then(response)
}