import React, { Component } from "react";
//import AddEmployee from "./Components/AddEmployee";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Product from "./Components/Product";
import Customer from "./Components/Customer";
import Home from "./Components/Home";
import NewProduct from "./Components/NewProduct";
import NewCustomer from "./Components/NewCustomer";
//import { Router } from '@reach/router';
import { HashRouter } from 'react-router-dom';

//const apiURL = "http://52.87.168.97";  //use this when connecting to API remotely
//const apiURL = ""; //use this in dev
//const apiURL = "http://localhost:8080";  //use this when testing the API itself

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Product} />
        <Route exact path="/customers" component={Customer} />
        <Route exact path="/products-new" component={NewProduct} />
        <Route exact path="/customers-new" component={NewCustomer} />
      </HashRouter>
    );
  }
}

export default App;     