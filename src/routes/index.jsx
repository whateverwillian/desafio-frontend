import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import RenderComponent from '../pages/RenderComponent';
import Canvas from '../pages/Canvas';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/render' component={RenderComponent} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;