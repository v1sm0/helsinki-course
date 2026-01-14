import React from 'react'

export default function Part(props) {
    const parts = props.parts
  return (
    <p>
        {parts.name} {parts.exercises}
    </p>
  )
}
