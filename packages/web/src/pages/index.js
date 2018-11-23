import React from 'react'
import { Provider } from 'react-redux'

import Tweets from './tweets'
import store from './../store'

export default () => (
  <Provider store={store}>
    <Tweets />
  </Provider>
)
