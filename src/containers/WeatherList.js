import React, { Component } from 'react'
import { connect } from 'react-redux'
import Sparklines from '../components/SparkLines'
class WeatherList extends Component {
  renderWeather (cityData) {
    console.log(cityData)
    const name = cityData.city.name
    const temperatures = cityData.list.map(weather => weather.main.temp)
    const humidity = cityData.list.map(weather => weather.main.humidity)
    const pressure = cityData.list.map(weather => weather.main.pressure)

    return (
      <tr key={name}>
        <td >
          {name}
        </td>
        <td>
          <Sparklines data={temperatures} color='blue' units='K' />
        </td>
        <td>
          <Sparklines data={pressure} color='orange' units='hPa' />
        </td>
        <td>
          <Sparklines data={humidity} color='green' units='%' />
        </td>

      </tr>
    )
  }

  render () {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature [K]</th>
            <th>Pressure [hPa]</th>
            <th>Humidity [%]</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps ({ weather }) {
  // const weather = state.weather is same as {weather}
  return { weather } // ES6 syntax, same as {weather: weather}
}

export default connect(mapStateToProps)(WeatherList)
