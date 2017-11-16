import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import Landing from "./Landing";
import Homes from "./Homes/";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" exact component={Landing} />
          <Route path="/homes" exact component={Homes} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
