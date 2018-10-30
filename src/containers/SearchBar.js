import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'

class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = { selectedCity: '' }
    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onInputChange (event) {
    console.log(event.target.value)
    this.setState({ selectedCity: event.target.value })
  }

  onFormSubmit (event) {
    event.preventDefault()
    // fetch the weather data by calling action creator
    this.props.fetchWeather(this.state.selectedCity)
    // reset the state after data is fetched
    this.setState({ selectedCity: '' })
  }

  render () {
    return (
      <form className='input-group' onSubmit={this.onFormSubmit}>
        <input
          placeholder='Get a weather forecast in your city'
          value={this.state.selectedCity}
          onChange={this.onInputChange}
        />
        <span className='input-group=btn'>
          <button type='submit' className='btn btn-secondary'>Submit</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(
  null,
  mapDispatchToProps
)(SearchBar)
