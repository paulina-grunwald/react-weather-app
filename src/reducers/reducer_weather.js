import { FETCH_WEATHER } from '../actions/index'

export default function (state = [], action) {
  console.log('Action received ', action.type)

  switch (action.type) {
    case FETCH_WEATHER:
      // return state.concat([action.payload.data]); or spread operator:
      return [action.payload.data, ...state]
  }
  return state
}
