import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Home from './Home';
import AuthContainer from '../containers/AuthContainer';
import Auth from './Auth';
import Page404 from './Errors/404';

const AppRouter = () => (
  <Router history={browserHistory}>
    <Route path="/">
      <IndexRoute component={Home} />
      <Route path="about" component={Home} />
    </Route>
    <Route path="/login" component={AuthContainer}>
      <IndexRoute component={Auth} />
    </Route>
    <Route path="*" component={Page404} />
  </Router>
);

export default AppRouter;
