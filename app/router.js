
import React, { PropTypes } from 'react';

// Routing
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { App } from './components';

// View components
import { Home, About, Contact, Collection } from './containers';

const AppRouter = ({ history }) => (
  <Router history={ history }>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
    </Route>
  </Router>
);

AppRouter.propTypes = {
  history: PropTypes.object.isRequired
}

export default AppRouter;
