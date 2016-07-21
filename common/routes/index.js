import React from 'react';
import { Router, Route } from 'react-router';

import App from '../containers/app';
import TopicsContainer from '../containers/topics-container';
import NotificationContainer from '../containers/topic-container';
import MeContainer from '../containers/me-container';
import TopicContainer from '../containers/topic-container';
import LoginContainer from '../containers/login-container';

export default history => (
  <Router history={history}>
    <Route path="/" component={App} >
      <IndexRoute component={TopicsContainer} />
      <Route path="me" component={MeContainer} />
      <Route path="notifications" component={NotificationContainer} />
      <Route path="login" component={LoginContainer} />
      <Route path="topics/:topicId" component={TopicContainer} />
    </Route>
  </Router>
);
