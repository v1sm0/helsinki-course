import React from 'react'

export default function AddNew({ addPerson }) {
  return (
    <>
    <h3>Add a new</h3>
    <form onSubmit={addPerson}>
        <div>name: <input /></div>
        <div>number: <input /></div>
        <div><button type="submit">add</button></div>
    </form>
    </>
  )
}
