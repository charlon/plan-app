import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Boilerplate from './boilerplate/Boilerplate';
import Courses from './myplan/courses/'
import Home from './myplan/home/'
import Programs from './myplan/programs/'
import Registration from './myplan/registration/'

const App = () => (
  <Boilerplate>
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route path="/programs" component={Programs} />
      <Route path="/courses" component={Courses} />
      <Route path="/registration" component={Registration} />
    </Switch>
  </Boilerplate>
);

export default App;
