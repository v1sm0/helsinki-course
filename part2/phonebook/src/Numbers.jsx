import React from 'react'

export default function Numbers({ filteredPersons }) {
  return (
    <>
    <h3>Numbers</h3>
    <ul>
      {filteredPersons.map((person) => (
        <li key={person.name}>
          {person.name} {person.number}
        </li>
      ))}
    </ul>
    </>
  )
}
