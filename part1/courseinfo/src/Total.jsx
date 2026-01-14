import React from 'react'

export default function Total(props) {
    const exercises = props['course']['parts'].map(part => part.exercises)
  return ( 
      <p>Number of exercises {exercises[0] + exercises[1] + exercises[2]}</p>
  )
}
