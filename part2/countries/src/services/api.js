import axios from 'axios'

const getCountries = () => {
    return axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
}

const getCountryByName = (name) => {
    return axios.get(`https://studies.cs.helsinki.fi/restcountries/api/name/${name}`)
}

const getWeather = (capital) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}`)
}

export { getCountries, getCountryByName, getWeather }