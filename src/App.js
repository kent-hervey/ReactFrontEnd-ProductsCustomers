import React, { Component } from "react";
//import AddEmployee from "./Components/AddEmployee";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Product from "./Components/Product";
import Customer from "./Components/Customer";
import Home from "./Components/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Product} />
        <Route exact path="/customers" component={Customer} />
      </Router>
    );
  }
}

export default App;     