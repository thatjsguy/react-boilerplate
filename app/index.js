// React
import React from 'react'
import ReactDOM from 'react-dom'

import AppRouter from './router'
import store from './store'

import { Provider } from 'react-redux'

import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={ store }>
    <div>
      <AppRouter history={ history }/>
    </div>
  </Provider>,
  document.getElementById('main')
)
