import { REQUEST_API_DATA, RECEIVE_API_DATA } from './../constants/actiontypes'

export const requestApiData = (q, maxID = 0, sinceID = 0) => ({
  type: REQUEST_API_DATA,
  payload: {
    q,
    maxID,
    sinceID,
  },
})
export const receiveApiData = data => ({
  type: RECEIVE_API_DATA,
  payload: {
    data,
  },
})
