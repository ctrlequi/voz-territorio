import React, { Component } from 'react';
import './App.css';

import Granim from 'granim'
import { connect } from 'react-redux'
import {HashRouter, Switch, Route, Link} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from "./components/Home/Home";
import Map from "./components/Map/Map";
import AddObservation from './components/AddObservation/AddObservation';
import Register from './components/Register/Register';
import ObservationDetail from './components/ObservationDetail/ObservationDetail';

class App extends Component {

  componentDidMount () {
    new Granim({
      element: '#header-animado',
      name: 'granim',
      opacity: [1, 1],
      states : {
          "default-state": {
              gradients: [
                  ['#0c3197','#1CD8D2'],
                  ['#1CD8D2','#28206d']
              ]
          }
      }
    })
  }

  notify = (msg, options) => {
    toast(msg, options)
  };

  render() {
    console.log('user', this.props.user)
    console.log('observations', this.props.observations)
    return (
      <HashRouter basename="/">
        <ToastContainer/>
        <div className="App">
        <header>
          <canvas id="header-animado"></canvas>
          <Link to="/"> Home </Link>
          <Link to="/map"> Map </Link>
          {
            ! this.props.user ?
              <Link to="/register"> Registro </Link> 
            :
              <Link to="/profile"> Perfil de {this.props.user.name} </Link> 
          }
          <Link className="no-flex" to="/add-observation"> +Observación </Link>
        </header>
        <section className="Container">
          <Switch>
            <Route exact path="/" render={(props) =>{
              return <Home onNotify={this.notify} {...props}/>
            }}/>
            <Route exact path="/map" render={(props) =>{
              return <Map onNotify={this.notify} {...props}/>
            }}/>
            <Route exact path="/register" render={(props) =>{
              return <Register onNotify={this.notify} {...props}/>
            }}/>
            <Route exact path="/add-observation" render={(props) =>{
              return <AddObservation onNotify={this.notify} {...props}/>
            }}/>
            <Route exact path="/observations/:id" render={(props) =>{
              return <ObservationDetail onNotify={this.notify} {...props}/>
            }}/>
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
