
import React, { Component } from "react";
import { Link } from 'react-router-dom';
//import { Route, BrowserRouter as Router } from "react-router-dom";
//import React from 'react';
//import './App.css';  
//const apiURL = "http://52.87.168.97";

class Home extends Component {

    render() {
        return (
            <>
                <div className="container">
                    <h1>Welcome to Customers and Products Dashboard</h1>

                    <h3>Below select to view by either products or customers showing all of our sold/active products and active customers and their associations</h3>
                    <div className="col-25">
                    </div>

                    <div className="col-50">
                        <ul>
                            <li>
                                <Link to="/customers">View By Customers</Link>
                            </li>
                            <li>
                                <Link to="/products">View by Products</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        );
    }
}

export default Home;







