import React from "react";
import { Route } from "react-router-dom";
import App from "./components/App";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";

const Routes = () => {
  return (
    <App>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
    </App>
  );
};

export default Routes;

