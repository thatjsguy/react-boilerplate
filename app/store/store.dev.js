// Flux - Redux
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
// import createLogger from 'redux-logger'

// MOve this

import { routerReducer } from 'react-router-redux'

// Get the Redux reducers
import * as reducers from '../reducers'

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
});

const store = createStore(
  reducer,
  compose(applyMiddleware(thunk), typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

// Reducer HMR
if (module.hot) {
  module.hot.accept('../reducers', () => {
    const updatedReducer = require('../reducers').default;
    store.replaceReducer(updatedReducer);
  })
};

export default store;
