import React, { Component } from 'react'
import { connect } from 'react-redux'

class WeatherList extends Component {
  renderWeather (cityData) {
    const name = cityData.city.name
    return (
      <tr key={name}>
        <td >
          {name}
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
