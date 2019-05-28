import React, { Component } from 'react';
import './App.css';


import {HashRouter, Switch, Route, Link} from 'react-router-dom';

// import ListaProductos from "./components/ListaProductos";
// import FormularioProductos from "./components/FormularioProducto";
// import MiCarrito from "./components/MiCarrito";
import Home from "./components/Home/Home";
import Map from "./components/Map/Map";

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div className="App">
        <header>
          <Link to="/"> Home </Link>
          <Link to="/map"> Map </Link>
        </header>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/map" component={Map}/>
        </Switch>
      </div>
      </HashRouter>
    )
  }
}

export default App;
