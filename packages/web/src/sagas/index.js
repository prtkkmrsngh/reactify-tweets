import { call, put, select, takeLatest } from 'redux-saga/effects'

import { REQUEST_API_DATA } from './../constants/actiontypes'
import { receiveApiData } from './../actions'
import { fetchData } from './../api'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getApiData(action) {
  try {
    // do api call
    const result = yield call(fetchData, ...[action.payload])

    // sort on basis of tweet create time
    result.data.statuses.sort((a, b) => {
      return new Date(b.created_at) - new Date(a.created_at)
    })

    const getData = state => state.data
    const prevData = yield select(getData)

    if (action.payload.maxID !== 0) {
      result.data.statuses.pop()
      result.data.statuses = [
        ...prevData.data.statuses,
        ...result.data.statuses,
      ]
    } else if (action.payload.sinceID !== 0) {
      result.data.statuses.shift()
      result.data.statuses = [
        ...result.data.statuses,
        ...prevData.data.statuses,
      ]
    }

    yield put(receiveApiData(result.data))
  } catch (e) {
    console.log(e)
  }
}

/*
  Alternatively you may use takeLatest.
  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export default function* mySaga() {
  yield takeLatest(REQUEST_API_DATA, getApiData)
}
