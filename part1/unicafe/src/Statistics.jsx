import React from 'react'

export default function Statistics({calculateStatistics, good, neutral, bad}) {
  const { total, average, positive } = calculateStatistics
  return (
    <div>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {average}</p>
      <p>positive {positive} %</p>
    </div>
  )
}
