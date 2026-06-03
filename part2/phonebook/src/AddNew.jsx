import React from 'react'

export default function AddNew({ handleAddPerson, newName, setNewName, newNumber, setNewNumber }) {
  return (
    <>
    <h3>Add a new</h3>
    <form onSubmit={handleAddPerson}>
        <div>name: <input value={newName} onChange={(event) => setNewName(event.target.value)} /></div>
        <div>number: <input value={newNumber} onChange={(event) => setNewNumber(event.target.value)} /></div>
        <div><button type="submit">add</button></div>
    </form>
    </>
  )
}
