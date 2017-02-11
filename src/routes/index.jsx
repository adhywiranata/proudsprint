import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import MainContainer from '../containers/MainContainer';
import AuthContainer from '../containers/AuthContainer';
import HomeContainer from '../containers/HomeContainer';

import Home from './Home';
import Auth from './Auth';
import Page404 from './Errors/404';

const AppRouter = () => (
  <Router history={browserHistory}>
    <Route path="/" component={MainContainer}>
      <IndexRoute component={HomeContainer} />
      <Route path="about" component={Home} />
    </Route>
    <Route path="/login" component={AuthContainer}>
      <IndexRoute component={Auth} />
    </Route>
    <Route path="*" component={Page404} />
  </Router>
);

export default AppRouter;
