import axios from 'axios'

const url = "http:3001/persons"

const getAll = () => {
    return axios.get(url).then(response=>response.data)
}

const create = (person) => {
    return axios.post(url, person).then(response=>response.data)
}

const update = () => {
    return axios.get(url).then(response=>response.data)
}