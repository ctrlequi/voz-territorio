import React, { Component } from 'react';
import './App.css';


import {Switch, Route, Link} from 'react-router-dom';

// import ListaProductos from "./components/ListaProductos";
// import FormularioProductos from "./components/FormularioProducto";
// import MiCarrito from "./components/MiCarrito";
import Home from "./components/Home/Home";
import Map from "./components/Map/Map";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Link to="/"> Prodcutos </Link>
          <Link to="/new-product"> + Producto </Link>
        </header>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/map" component={Map}/>
        </Switch>
      </div>
    )
  }
}

export default App;
