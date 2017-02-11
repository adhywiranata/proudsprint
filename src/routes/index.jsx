import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Home from './Home';
import Page404 from './Errors/404';

const AppRouter = () => (
  <Router history={browserHistory}>
    <Route path="/">
      <IndexRoute component={Home} />
      <Route path="about" component={Home} />
      <Route path="*" component={Page404} />
    </Route>
  </Router>
);

export default AppRouter;
