// React
import React from 'react'
import ReactDOM from 'react-dom'

// Flux - Redux
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

// Routing
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

// Get the Redux reducers
import * as reducers from './reducers'

// Get the components
import { App } from './components'

// View components
import Home from './components/views/Home'

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

const store = createStore(
  reducer,
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
        </Route>
      </Router>
    </div>
  </Provider>,
  document.getElementById('main')
)
