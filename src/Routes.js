import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Work from './containers/Work';
import About from './containers/About';
import Project from './containers/Project';

export default props => (
  <Switch>
    <Route
      path="/"
      exact
      render={()=> (
        <Home />
      )}
    />
    <Route
      path="/work"
      exact
      render={()=> (
        <Work />
      )}
    />
    <Route
      path="/about"
      exact
      render={()=> (
        <About />
      )}
    />
    <Route
      path="/project"
      exact
      render={()=> (
        <Project />
      )}
    />
    <Route
      path="/"
      exact
      render={()=> (
        <Home />
      )}
    />
  </Switch>
);
