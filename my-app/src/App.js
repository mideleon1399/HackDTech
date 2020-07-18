import React from 'react';
import './App.css';
import NavBar from './NavBar'
import MapChart from "./MapChart";
import Intro from "./intro";
import Resources from "./resources";
import {Route, Switch } from 'react-router-dom';

function App() {
  return (
      <main>
        <NavBar />
          <Switch>
              <Route path="/" component={Intro} exact />
              <Route path="/map" component={MapChart} />
              <Route path="/resources" component={Resources} />
              <Route component={Error} />
          </Switch>
      </main>
  )
}

export default App;
