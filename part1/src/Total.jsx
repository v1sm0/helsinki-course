import React from 'react'

export default function Total(props) {
  return ( 
      <p>Number of exercises {props.exercises[0] + props.exercises[1] + props.exercises[2]}</p>
  )
}
