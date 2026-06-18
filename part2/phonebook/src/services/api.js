import axios from 'axios'

const baseUrl = '/api/persons'

const getPersons = () => {
    return axios.get(baseUrl)
  }

const addPerson = (person) => {
    return axios.post(baseUrl, person)
  }

const deletePerson = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
  }

const updatePerson = (id, person) => {
    return axios.put(`${baseUrl}/${id}`, person)
  }

export { getPersons, addPerson, deletePerson, updatePerson }
