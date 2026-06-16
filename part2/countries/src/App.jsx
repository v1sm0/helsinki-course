import { useState, useEffect } from 'react'
import { getCountries, getCountryByName } from './services/api'
import Country from './Country'
import '../index.css'

const App = () => {
  const [countries, setCountries] = useState([])
  const [matchedCountries, setMatchedCountries] = useState([])
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    getCountries()
      .then(response => {
        setCountries(response.data)
      })
      .catch(error => {
        setError(error.response.data.error)
      })
  }, [])

  const handleSearch = (event) => {
    const value = event.target.value
    setSearch(value)
    if (value.length > 0) {
      const matches = countries.filter(country =>
        country.name.common.toLowerCase().includes(value.toLowerCase())
      )
      if (matches.length > 10) {
        setError('Too many matches, specify another filter')
        setMatchedCountries([])
      } else {
        setError(null)
        setMatchedCountries(matches)
      }
    } else {
      setError('No matches found')
      setMatchedCountries([])
    }
  }

  const handleShowCountry = (name) => {
    getCountryByName(name)
      .then(response => {
        setMatchedCountries([response.data])
      })
      .catch(error => {
        setError(error.response.data.error)
      })
  } 

  return (
    <div>
      <h2>Countries</h2>
      <input
        type="text"
        placeholder="Search for a country"
        value={search}
        onChange={handleSearch}
      />
      {error && <p>{error}</p>}
      {matchedCountries.length === 1 ? (
        <Country country={matchedCountries[0]} />
      ) : (
        <ul>
          {matchedCountries.map(country => (
            <>
              <li>{country.name.common}</li>
              <button onClick={() => handleShowCountry(country.name.common)}>Show</button>
            </>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
