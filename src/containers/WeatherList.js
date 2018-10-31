import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'
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
          <Sparklines height={120} width={180} data={temperatures}>
            <SparklinesLine color='blue' />
            <SparklinesReferenceLine type='mean' />
          </Sparklines>
        </td>
        <td>
          <Sparklines height={120} width={180} data={pressure}>
            <SparklinesLine color='orange' />
            <SparklinesReferenceLine type='mean' />
          </Sparklines>
        </td>
        <td>
          <Sparklines height={120} width={180} data={humidity}>
            <SparklinesLine color='green' />
            <SparklinesReferenceLine type='mean' />
          </Sparklines>
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
