
import React, { Component } from "react";
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
                            <li><a href="/customers">View By Customers</a></li>
                            <li><a href="/products">View by Products</a></li>
                        </ul>
                    </div>
                </div>
            </>
        );
    }
}

export default Home;







