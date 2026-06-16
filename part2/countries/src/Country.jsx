import { useState, useEffect } from 'react'
import { getWeather } from './services/api'

const Country = ({ country }) => {
  const capital = country.capital?.join(', ') ?? 'N/A'
  const [weather, setWeather] = useState(null)
  const [error, setError] = useState(null)
  useEffect(() => {
    getWeather(country.capital)
      .then(response => {
        setWeather(response.data)
      })
      .catch(error => {
        setError(error.response.data.error)
      })
  }, [country.capital])
  if (error) {
    return <p>{error}</p>
  }
  if (!weather) {
    return <p>Loading weather data...</p>
  }
  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital {capital}</p>
      <p>Area {country.area}</p>
      <h2>Languages</h2> 
      <ul> 
        {Object.values(country.languages).map(language => 
        <li key={language}>{language}</li>)}
      </ul>
      <img
        src={country.flags.png}
        alt={country.flags.alt ?? `Flag of ${country.name.common}`}
      />
      <h2>Weather in {country.capital}</h2>
      <p>Temperature {weather.main.temp}</p>
      <p>Wind {weather.wind.speed} m/s</p>
      <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt={weather.weather[0].description} />
    </div>
  )
}

export default Country
