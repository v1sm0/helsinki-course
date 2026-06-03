import React from 'react'
import { deletePerson } from './services/api'

export default function Numbers({ filteredPersons, setPersons }) {
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this person?')) {
      deletePerson(id).then(() => {
        setPersons(filteredPersons.filter((person) => person.id !== id))
      }).catch((error) => {
        console.error('Error:', error)
      })
    }
  } 
  return (
    <>
    <h3>Numbers</h3>
    <ul>
      {filteredPersons.map((person) => (
        <div key={person.name}>
          <li>{person.name} {person.number} <button onClick={() => handleDelete(person.id)}>delete</button>
          </li>
        </div>
      ))}
    </ul>
    </>
  )
}
