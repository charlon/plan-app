import * as React from 'react';
// import { Route, Switch } from 'react-router-dom';
import { Switch } from 'react-router-dom';

import Boilerplate from './boilerplate/Boilerplate';

const App = () => (
  <Boilerplate>
    <Switch>
      {/*<Route exact={true} path="/" component={Home} />
      <Route path="/teaching" component={Teaching} /> */}
    </Switch>
  </Boilerplate>
);

export default App;
