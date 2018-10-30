import axios from 'axios'

const WEATHER_FORECAST_API_KEY = '1636a271c9b9b1c4c9c14ef5403c2123';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_FORECAST_API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather (city) {
  const url = `${ROOT_URL}&q=${city},us`
  const request = axios.get(url)

  // console.log('Request ', request);
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
