
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Route, BrowserRouter as Router } from "react-router-dom";
//import React from 'react';
//import './App.css';  


class Home extends Component {
    render() {
        return (
            <>
                <div class="container">
                    <h1>Welcome to Customers and Products Dashboard</h1>

                    <h3>Below select to view by either products or customers showing all of our sold/active products and active customers and their associations</h3>
                    <div class="col-25">
                    </div>

                    <div class="col-50">
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







