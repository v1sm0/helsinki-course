import { useState } from 'react'
import AddNew from './AddNew'
import Filter from './Filter'
import Numbers from './Numbers'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const filteredPersons = persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already in the phonebook`)
      return
    }
    if (persons.some((person) => person.number === newNumber)) {
      alert(`${newNumber} is already in the phonebook`)
      return
    }
    setPersons([...persons, { name: newName, number: newNumber }])
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <AddNew addPerson={addPerson} />
      <Numbers filteredPersons={filteredPersons} />
    </div>
  )
}

export default App