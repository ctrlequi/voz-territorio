import React, { Component } from 'react';
import './App.css';


import {HashRouter, Switch, Route, Link} from 'react-router-dom';

import Home from "./components/Home/Home";
import Map from "./components/Map/Map";
import AddObservation from './components/AddObservation/AddObservation';
import Register from './components/Register/Register';

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div className="App">
        <header>
          <Link to="/"> Home </Link>
          <Link to="/map"> Map </Link>
          <Link to="/register"> Registro </Link>
          <Link to="/add-observation"> +Observación </Link>
        </header>
        <section className="Container">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/map" component={Map}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/add-observation" component={AddObservation}/>
          </Switch>
        </section>
      </div>
      </HashRouter>
    )
  }
}

export default App;
