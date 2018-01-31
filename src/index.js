import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router
} from "react-router-dom";
import Routes from "./routes";
import "./styles/styles.css"; //Webpack can import CSS files too!
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <Router>
    <Routes/>
  </Router>,
  document.getElementById("root")
);