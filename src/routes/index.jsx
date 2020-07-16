import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import Render from '../pages/Render';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/render' component={Render} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;