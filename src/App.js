import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux'
import {HashRouter, Switch, Route, Link} from 'react-router-dom';

import Home from "./components/Home/Home";
import Map from "./components/Map/Map";
import AddObservation from './components/AddObservation/AddObservation';
import Register from './components/Register/Register';
import ObservationDetail from './components/ObservationDetail/ObservationDetail';

class App extends Component {
  render() {
    console.log('user', this.props.user)
    console.log('observations', this.props.observations)
    return (
      <HashRouter basename="/">
        <div className="App">
        <header>
          <Link to="/"> Home </Link>
          <Link to="/map"> Map </Link>
          {
            ! this.props.user ?
              <Link to="/register"> Registro </Link> 
            :
              <Link to="/profile"> Perfil de {this.props.user.name} </Link> 
          }
          <Link to="/add-observation"> Nueva observación </Link>
        </header>
        <section className="Container">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/map" component={Map}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/add-observation" component={AddObservation}/>
            <Route exact path="/observations/:id" component={ObservationDetail}/>
          </Switch>
        </section>
      </div>
      </HashRouter>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    observations: state.observations
  }
}

export default connect(
  mapStateToProps
)(App);
