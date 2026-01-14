import React from 'react'

export default function CalificationButtons({setGood, setNeutral, setBad}) {
  const handleSetter = (setter) => () => setter(prev => prev + 1)

  return (
    <div>
      <button onClick={handleSetter(setGood)}>Good</button>
      <button onClick={handleSetter(setNeutral)}>Neutral</button>
      <button onClick={handleSetter(setBad)}>Bad</button>
    </div>
  )
}
