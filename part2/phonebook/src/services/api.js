import axios from 'axios'

const getPersons = () => {
    return axios.get('http://localhost:3001/persons')
  }

const addPerson = (person) => {
    return axios.post('http://localhost:3001/persons', person)
  }

const deletePerson = (id) => {
    return axios.delete(`http://localhost:3001/persons/${id}`)
  }

const updatePerson = (id, person) => {
    return axios.put(`http://localhost:3001/persons/${id}`, person)
  }

export { getPersons, addPerson, deletePerson, updatePerson }