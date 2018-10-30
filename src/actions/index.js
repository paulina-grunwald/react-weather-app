import axios from 'axios'

const API_KEY = '9483b57da47004d6c9e5d7d31a0fbbc1'
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather (city) {
  const url = `${ROOT_URL}&=${city},pl`
  const request = axios.get(url)

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
