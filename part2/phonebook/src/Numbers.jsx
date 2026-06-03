import React from 'react'
import { deletePerson } from './services/api'

export default function Numbers({ filteredPersons, setPersons, setNotification }) {
  const handleDelete = (id, name) => {
    if (window.confirm('Are you sure you want to delete this person?')) {
      deletePerson(id).then(() => {
        setPersons(filteredPersons.filter((person) => person.id !== id))
        setNotification({ type: 'success', message: `Deleted ${name}` })
      }).catch((error) => {
        setNotification({ type: 'error', message: error.response.data.error })
      })
    }
  }
  return (
    <>
    <h3>Numbers</h3>
    <ul>
      {filteredPersons.map((person) => (
        <div key={person.name}>
          <li>{person.name} {person.number} <button onClick={() => handleDelete(person.id, person.name)}>delete</button>
          </li>
        </div>
      ))}
    </ul>
    </>
  )
}
