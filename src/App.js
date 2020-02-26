import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import "./App.css";

import Home from "Components/Home/Home.jsx";
import { render } from "node-sass";

function App() {
  render(){
    return (
      <div className="App">
        <Router>
          <div>
            <h1>Teeeestotototot</h1>
            <Route exact path="/" component={Home} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
