import React, { Component } from "react";



import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import Home from "./Home";
  import Football from "./Football";
  import Basketball from "./Basketball";
  import Soccer from "./Soccer";
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>Aaron's Favorite Sports </h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/Football">Football</NavLink></li>
            <li><NavLink to="/Basketball">Basketball</NavLink></li>
            <li><NavLink to="/Soccer">Soccer</NavLink></li>
          </ul>
          <div className="content">
          <Route exact path="/" component={Home}/>
            <Route path="/Football" component={Football}/>
            <Route path="/Basketball" component={Basketball}/>
            <Route path="/Soccer" component={Soccer}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;