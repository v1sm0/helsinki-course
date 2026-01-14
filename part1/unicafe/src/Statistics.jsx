import React from 'react'
import StatisticLine from './StatisticLine.jsx'

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
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />  
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={`${positive} %`} />
      </div>
    )
}
}
