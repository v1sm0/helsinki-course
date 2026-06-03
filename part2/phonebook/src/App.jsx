import { useState, useEffect } from 'react'
import AddNew from './AddNew'
import Filter from './Filter'
import Numbers from './Numbers'   
import { addPerson, updatePerson, getPersons } from './services/api'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const filteredPersons = persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))

  useEffect(() => {
    getPersons().then(response => {
      setPersons(response.data)
    })
  }, [])

  const handleAddPerson = (event) => {
    event.preventDefault()
    if (newName === '' || newNumber === '') {
      alert('Name and number are required')
      return
    }

    const existing = persons.find((person) => person.name === newName)

    if (existing) {
      if (window.confirm(`${newName} is already in the phonebook, replace the old number with a new one?`)) {
        updatePerson(existing.id, { name: newName, number: newNumber })
          .then((response) => {
            setPersons(persons.map((person) => (person.id === existing.id ? response.data : person)))
            setNewName('')
            setNewNumber('')
          })
          .catch((error) => {
            console.error('Error:', error)
          })
      }
      return
    }

    addPerson({ name: newName, number: newNumber })
      .then((response) => {
        setPersons(persons.concat(response.data))
        setNewName('')
        setNewNumber('')
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <AddNew handleAddPerson={handleAddPerson} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} />
      <Numbers filteredPersons={filteredPersons} setPersons={setPersons} />
    </div>
  )
}

export default App