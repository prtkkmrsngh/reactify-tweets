import { RECEIVE_API_DATA } from './../constants/actiontypes'

const initialState = {
  data: {},
}

export default (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_API_DATA:
      return {
        ...state,
        data: payload.data,
      }
    default:
      return state
  }
}
