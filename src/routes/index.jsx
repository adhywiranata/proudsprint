import React from 'react';
import { Router, Route, browserHistory, hashHistory } from 'react-router';

import Home from './Home';
import Page404 from './Errors/404';

const AppRouter = () => (
  <Router history={hashHistory}>
    <Route path="/" component={Home}>
      <Route path="about" component={Home} />
      <Route path="*" component={Page404} />
    </Route>
  </Router>
);

export default AppRouter;
