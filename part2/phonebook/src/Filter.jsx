import React from 'react'

export default function Filter({ filter, setFilter }) {
  return (
    <>
    <h3>Filter</h3>
    <input placeholder="Search for a name" value={filter} onChange={(event) => setFilter(event.target.value)} />
    </>
  )
}
