import React from 'react'

export default function Statistics({good, neutral, bad}) {
  const getStatistics = () => {
      const total = good + neutral + bad
      const average = (good - bad) / total || 0
      const positive = (good / total) * 100 || 0
      return { total, average, positive }
    }
  const { total, average, positive } = getStatistics()
  if (total === 0) {
    return (
      <p>No feedback given</p>
    )
  } else {

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
}
