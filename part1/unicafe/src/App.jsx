import { useState } from 'react'
import Header from './Header'
import CalificationButtons from './CalificationButtons'
import Statistics from './Statistics'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const getStatistics = () => {
    const total = good + neutral + bad
    const average = (good - bad) / total || 0
    const positive = (good / total) * 100 || 0
    return { total, average, positive }
  }

  return (
    <div>
      <Header text="Give feedback" />
      <CalificationButtons setGood={setGood} setNeutral={setNeutral} setBad={setBad} />
      <Header text="Statistics" />
      <Statistics calculateStatistics={getStatistics()} good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App