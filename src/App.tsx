import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Boilerplate from './boilerplate/Boilerplate';
import Courses from './myplan/courses/'
import Programs from './myplan/programs/'

const App = () => (
  <Boilerplate>
    <Switch>
      <Route path="/programs" component={Programs} />
      <Route path="/courses" component={Courses} />
    </Switch>
  </Boilerplate>
);

export default App;
