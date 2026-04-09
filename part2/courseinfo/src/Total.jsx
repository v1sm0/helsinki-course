import React from 'react'

export default function Total(props) {
    const exercises = props['course']['parts'].map(part => part.exercises)
  return ( 
      <b>Total number of exercises {exercises.reduce((sum, exercise) => sum + exercise, 0)}</b>
  )
}
