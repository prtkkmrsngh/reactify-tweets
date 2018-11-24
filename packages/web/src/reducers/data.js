import { RECEIVE_API_DATA } from './../constants/actiontypes'

export default (state = {}, action) => {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_API_DATA:
      return payload.data
    default:
      return state
  }
}
