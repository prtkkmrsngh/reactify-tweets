import axios from 'axios'

export const fetchData = data => {
  const { q, count, maxID, sinceID } = data
  const promise = axios.get(`${process.env.REACT_APP_SERVER_URL}/fetch`, {
    params: { q, count, maxID, sinceID },
  })
  promise.then(response => {
    return { response }
  })
  promise.catch(error => {
    return { error }
  })

  return promise
}
