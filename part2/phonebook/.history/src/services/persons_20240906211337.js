import axios from "axios";

const url = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(url).then((response) => response.data);
};

const create = (person) => {
  return axios.post(url, person).then((response) => response.data);
};

const update = (id, person) => {
  return axios.get(url.concat(id), person).then((response) => response.data);
};
const delete = ()

export default { getAll, create, update };
