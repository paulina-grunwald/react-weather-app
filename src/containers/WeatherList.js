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
          <Sparklines data={temperatures} color='blue' />
        </td>
        <td>
          <Sparklines data={pressure} color='orange' />
        </td>
        <td>
          <Sparklines data={humidity} color='green' />
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
            <th>Temperature</th>
            <th>Pressure</th>
            <th>City</th>
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
